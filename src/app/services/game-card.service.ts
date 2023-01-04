import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ParentPlatformInfo } from '../interfaces';
import { GamesAPIService } from './gamesAPI.service';

@Injectable({
  providedIn: 'root'
})
export class GameCardService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private gameAPIservice: GamesAPIService
  ) {}

  addCustomIcons(icon: string) {
    this.matIconRegistry.addSvgIcon(
      icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../icons/" + icon + ".svg")
    );
  }

  addPlatformIcons() {
    this.gameAPIservice.getParentPlatforms()
    .subscribe((parentPlatforms: any) => {
      parentPlatforms.results.forEach((platform: ParentPlatformInfo) => {
        this.addCustomIcons(platform.slug);
      });
    })
  }

}
