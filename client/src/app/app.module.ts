import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionComponent } from './exercise/selection/selection.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseUnitComponent } from './exercise/exercise-unit/exercise-unit.component';
import {SchooltypeService} from "./services/schooltype.service";
import {SchoollevelService} from "./services/schoollevel.service";
import { TypeSelectionComponent } from './exercise/selection/type-selection/type-selection.component';
import { LevelSelectionComponent } from './exercise/selection/level-selection/level-selection.component';
import { InputLanguageSelectionComponent } from './exercise/selection/language-selection/language-selection.component';
import {LanguageService} from "./services/language.service";
import { UnitSelectionComponent } from './exercise/selection/unit-selection/unit-selection.component';
import {UnitService} from "./services/unit.service";
import {VocabService} from "./services/vocab.service";
import {WordService} from "./services/word.service";
import {AppRoutingModule} from "./routing/app-routing/app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './administration/login/login.component';
import { ManageComponent } from './administration/manage/manage.component';
import {AuthenticationService} from "./services/authentication.service";
import {ManagementNavbarComponent} from './administration/navbar/navbar.component';
import { ManageTypesComponent } from './administration/manage/manage-types/manage-types.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ManageLevelsComponent } from './administration/manage/manage-levels/manage-levels.component';
import { ManageUnitsComponent } from './administration/manage/manage-units/manage-units.component';
import { ManageVocabsComponent } from './administration/manage/manage-vocabs/manage-vocabs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SelectionComponent,
    ExerciseComponent,
    ExerciseUnitComponent,
    TypeSelectionComponent,
    LevelSelectionComponent,
    InputLanguageSelectionComponent,
    UnitSelectionComponent,
    PageNotFoundComponent,
    AdministrationComponent,
    LoginComponent,
    ManageComponent,
    ManagementNavbarComponent,
    ManageTypesComponent,
    ErrorPageComponent,
    ManageLevelsComponent,
    ManageUnitsComponent,
    ManageVocabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SchooltypeService,
    SchoollevelService,
    LanguageService,
    UnitService,
    VocabService,
    WordService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
