import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../../page-not-found/page-not-found.component";
import {ExerciseComponent} from "../../exercise/exercise.component";
import {AdministrationComponent} from "../../administration/administration.component";

const appRoutes: Routes = [
  {path: 'exercise', component: ExerciseComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: '', redirectTo: "exercise", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
