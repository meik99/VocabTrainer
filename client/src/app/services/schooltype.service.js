"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var base_service_1 = require("./base.service");
var SchooltypeService = (function (_super) {
    __extends(SchooltypeService, _super);
    function SchooltypeService(http) {
        _super.call(this);
        this.http = http;
        this.typeurl = this.URL_BASE + "schooltypes";
    }
    SchooltypeService.prototype.findAllSchooltypes = function () {
        return this.http.get(this.typeurl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SchooltypeService.prototype.findSchooltypeById = function (schooltype_id) {
        var requestUrl = this.typeurl + "/" + schooltype_id;
        return this.http.get(requestUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SchooltypeService = __decorate([
        core_1.Injectable()
    ], SchooltypeService);
    return SchooltypeService;
}(base_service_1.BaseService));
exports.SchooltypeService = SchooltypeService;
