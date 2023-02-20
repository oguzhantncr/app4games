import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form, FormControl } from '@angular/forms';
import { GamesAPIService } from 'src/app/services/gamesAPI.service';
import { Genre, ParentPlatformInfo } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {

  filterForm: FormGroup;

  gameGenres: Genre[];
  parentPlatforms: ParentPlatformInfo[];
  minMetacriticRating: number = 0;
  maxMetacriticRating: number = 100;

  constructor(private fb: FormBuilder, private gamesAPIService: GamesAPIService,
              private router: Router,
              public dialogRef: MatDialogRef<FilterDialogComponent>) {}


  ngOnInit() {
    this.gamesAPIService.getGenres().subscribe((genres: any) => {
      this.gameGenres = genres.results
    })

    this.gamesAPIService.getParentPlatforms().subscribe((pplatforms: any) => {
      this.parentPlatforms = pplatforms.results
    })

    this.filterForm = this.fb.group({
      categories: this.fb.array([]),
      platforms: this.fb.array([]),
      minRating: 0,
      maxRating: 100
    });

    this.filterForm.get('minRating')?.valueChanges.subscribe(val => {
      this.minMetacriticRating = val;
    })
    this.filterForm.get('maxRating')?.valueChanges.subscribe(val => {
      this.maxMetacriticRating = val;
    })
  }

  onCheckboxChange(event: any, filterName: string) {
    const filterArray: FormArray = this.filterForm.get(filterName) as FormArray;
    if (event.target.checked) {
      filterArray.push(new FormControl(event.target.value));
    } 
    else {
      let i: number = 0;
      filterArray.controls.forEach(item => {
        if (item.value == event.target.value) {
          filterArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }
  
  submitFilters() {
    this.router.navigate(['/', 'games'], {
      queryParams: {
        page: 1,
        search: '',
        parent_platforms: this.filterForm.value.platforms.toString(),
        genres: this.filterForm.value.categories.toString(),
        metacritic: this.filterForm.value.minRating.toString() + ',' + this.filterForm.value.maxRating.toString()
      }      
    })
    this.closeFilters()
  }

  closeFilters() {
    this.dialogRef.close()
  }

}
