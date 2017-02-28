"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var unit_selection_component_1 = require('./exercise/unit-selection/unit-selection.component');
var exercise_component_1 = require('./exercise/exercise.component');
var exercise_unit_component_1 = require('./exercise/exercise-unit/exercise-unit.component');
var schooltype_service_1 = require("./services/schooltype.service");
var schoollevel_service_1 = require("./services/schoollevel.service");
var type_selection_component_1 = require('./exercise/unit-selection/type-selection/type-selection.component');
var level_selection_component_1 = require('./exercise/unit-selection/level-selection/level-selection.component');
var language_selection_component_1 = require('./exercise/unit-selection/language-selection/language-selection.component');
var language_service_1 = require("./services/language.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                unit_selection_component_1.UnitSelectionComponent,
                exercise_component_1.ExerciseComponent,
                exercise_unit_component_1.ExerciseUnitComponent,
                type_selection_component_1.TypeSelectionComponent,
                level_selection_component_1.LevelSelectionComponent,
                language_selection_component_1.InputLanguageSelectionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                schooltype_service_1.SchooltypeService,
                schoollevel_service_1.SchoollevelService,
                language_service_1.LanguageService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
