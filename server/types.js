/**
 * Created by mrynkiewicz on 28/02/17.
 */

module.exports = function (app) {
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints.types, function (request, response) {
        database.findSchooltypes(function (error, results, fields) {
            response.send(results);
        });
    });

    app.get(endpoints.typeById, function (request, response) {
        if(request.params["id"]) {
            var id = +request.params["id"];

            database.findSchooltypeById(id, function (error, results, fields) {
                response.send(results);
            });
        }
    });
};