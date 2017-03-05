import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "../../page-not-found/page-not-found.component";
import {ExerciseComponent} from "../../exercise/exercise.component";
import {AdministrationComponent} from "../../administration/administration.component";
import {ManageComponent} from "../../administration/manage/manage.component";
import {LoginComponent} from "../../administration/login/login.component";
import {ManageTypesComponent} from "../../administration/manage/manage-types/manage-types.component";
import {ErrorPageComponent} from "../../error-page/error-page.component";
import {ManagementNavbarComponent} from "../../administration/navbar/navbar.component";
import {ManageLevelsComponent} from "../../administration/manage/manage-levels/manage-levels.component";
import {ManageUnitsComponent} from "../../administration/manage/manage-units/manage-units.component";
import {ManageVocabsComponent} from "../../administration/manage/manage-vocabs/manage-vocabs.component";

const appRoutes: Routes = [
  {path: 'error', component: ErrorPageComponent},
  {path: 'exercise', component: ExerciseComponent},
  {path: 'administration', component: AdministrationComponent},
  {path: 'administration/login', component: LoginComponent},
  {
    path: 'administration/manage',
    component: ManagementNavbarComponent,
    children: [
      {path: 'profile', component: ManageComponent, outlet: "management"},
      {path: 'types', component: ManageTypesComponent, outlet: "management"},
      {path: 'levels', component: ManageLevelsComponent, outlet: "management"},
      {path: 'units', component: ManageUnitsComponent, outlet: "management"},
      {path: 'vocabs', component: ManageVocabsComponent, outlet: "management"},
      {path: "*", component: PageNotFoundComponent, outlet: "management"}
    ]
  },
  {path: '', redirectTo: "exercise", pathMatch: "full"},
  {path: "*", component: PageNotFoundComponent}
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
