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
    UnitSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SchooltypeService,
    SchoollevelService,
    LanguageService,
    UnitService,
    VocabService,
    WordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
