import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../../page-not-found/page-not-found.component";
import {ExerciseComponent} from "../../exercise/exercise.component";
import {AdministrationComponent} from "../../administration/administration.component";
import {ManageComponent} from "../../administration/manage/manage.component";
import {LoginComponent} from "../../administration/login/login.component";
import {ManageTypesComponent} from "../../administration/manage/manage-types/manage-types.component";

const appRoutes: Routes = [
  {path: 'exercise', component: ExerciseComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'administration/login', component: LoginComponent},
  {path: 'administration/manage', component: ManageComponent},
  {path: 'administration/types', component: ManageTypesComponent},
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
