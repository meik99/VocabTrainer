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
var SchoollevelService = (function (_super) {
    __extends(SchoollevelService, _super);
    function SchoollevelService(http) {
        _super.call(this);
        this.http = http;
        this.levelurl = this.URL_BASE + "schoollevels";
    }
    SchoollevelService.prototype.findSchoollevelsForType = function (schooltype) {
        var requestUrl = this.levelurl + "/" + schooltype.id;
        return this.http.get(requestUrl)
            .toPromise()
            .then(function (request) { return request.json(); })
            .catch(this.handleError);
    };
    SchoollevelService = __decorate([
        core_1.Injectable()
    ], SchoollevelService);
    return SchoollevelService;
}(base_service_1.BaseService));
exports.SchoollevelService = SchoollevelService;
