/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function(app){
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints.unitByLevelLanguage, function (request, response) {
        var level = request.params["levelId"];
        var inputLang = request.params["inputLanguageId"];
        var outputLang = request.params["outputLanguageId"];

        if(level && inputLang && outputLang){
            var levelId = +level;
            var inputLangId = +inputLang;
            var outputLangId = +outputLang;

            database.findUnits(levelId, inputLangId, outputLangId, function (error, result, fields) {
                response.send(result);
            })
        }else{
            response.send([]);
        }

    });

    app.get(endpoints.units, function (request, response) {
       database.findAllUnits(function(err, result, fields){
            if(err) throw err;

            response.send(result);
       });
    });

    app.post(endpoints.unitByLevel, function (request, response) {
        database.findUnitsByLevel(request.body, function(err, results, fields){
            if(err) throw err;

            response.send(results);
        });
    });

    app.post(endpoints.unitBySchooltype, function (request, response) {
        database.findUnitsByType(request.body, function (err, result, fields) {
            if(err) throw err;

            response.send(result);
        });
    });

    app.post(endpoints.units, function (request, response) {
       database.createUnit(request.body.unit, request.body.level, function (err, result, fields) {
            if(err) throw err;
            database.findUnitsByLevel(request.body.level, function(err, result, fields){
                if(err) throw err;
                response.send(result);
            });
       }) ;
    });
};