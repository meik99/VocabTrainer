/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function (app) {
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints[5], function(request, response){
        var unit = request.params["unitId"];
        if(unit){
            var unitId = +unit;
            database.findVocabsByUnit(unitId, function (error, result, fields) {
                response.send(result);
            });
        }else{
            response.send([]);
        }
    });
}