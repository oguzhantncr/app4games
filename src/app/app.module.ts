import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from "@angular/material/dialog"
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { PaginatorComponent } from './common-components/paginator/paginator.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SearchBarComponent } from './common-components/search-bar/search-bar.component';
import { FilterDialogComponent } from './common-components/filter-dialog/filter-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListComponent,
    PaginatorComponent,
    GameDetailsComponent,
    SearchBarComponent,
    FilterDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
