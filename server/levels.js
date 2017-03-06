/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function(app){
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints.levels, function (request, response) {
       database.findLevels(function (error, results, fields) {
           if(error) throw error;

           response.send(results);
       });
    });

    app.get(endpoints.levelByTypeId, function (request, response) {
        if(request.params["typeId"]){
            var typeId = +request.params["typeId"];

            database.findLevelsByType(typeId, function (error, results, fields) {
                response.send(results);
            });
        }else {
            response.send([]);
        }
    });

    app.post(endpoints.levels, function (request, response) {
        database.createLevel(request.body, function (error, result, fields) {
            response.send(result);
        });
    });

    app.put(endpoints.levels, function (request, response) {
        database.updateLevel(request.body, function (error, result, fields) {
            response.send(result);
        });
    });

    app.delete(endpoints.levels, function (request, response) {
        database.deleteLevel(request.body, function (error, result, fields) {
            response.send(result);
        });
    });
};
