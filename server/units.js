/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function(app){
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints[4], function (request, response) {
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

    })
}