/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function(app){
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints[2], function (request, response) {
        if(request.params["typeId"]){
            var typeId = +request.params["typeId"];

            database.findLevelsByType(typeId, function (error, results, fields) {
                response.send(results);
            });
        }else {
            response.send([]);
        }
    });

};