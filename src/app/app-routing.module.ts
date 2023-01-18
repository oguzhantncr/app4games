import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full'},
  { path: 'games', component: GameListComponent },
  { path: 'games/:id', component: GameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
