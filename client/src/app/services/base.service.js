"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require("rxjs/add/operator/toPromise");
var config_1 = require("../config");
var BaseService = (function () {
    function BaseService() {
        this.URL_BASE = config_1.URL_BASE;
    }
    BaseService.prototype.handleError = function (error) {
        if (error.message) {
            console.log(error.message);
        }
        else if (error) {
            console.log(error);
        }
        else {
            console.log("An unexpected error occurred");
        }
    };
    BaseService = __decorate([
        core_1.Injectable()
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
