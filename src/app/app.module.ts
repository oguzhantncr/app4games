import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { PaginatorComponent } from './common-components/paginator/paginator.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SearchBarComponent } from './common-components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameListComponent,
    PaginatorComponent,
    GameDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
