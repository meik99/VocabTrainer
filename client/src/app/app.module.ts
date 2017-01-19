import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnitSelectionComponent } from './exercise/unit-selection/unit-selection.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseUnitComponent } from './exercise/exercise-unit/exercise-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnitSelectionComponent,
    ExerciseComponent,
    ExerciseUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
