"use strict";
/**
 * Created by michael on 1/20/17.
 */
var Level = (function () {
    function Level(id, description, schooltype_id, schooltypeService) {
        var _this = this;
        this.id = id;
        this.description = description;
        this.schooltype_id = schooltype_id;
        this.schooltypeService = schooltypeService;
        schooltypeService.findSchooltypeById(this.schooltype_id)
            .then(function (schooltype) { return _this.schooltype = schooltype; });
    }
    return Level;
}());
exports.Level = Level;
