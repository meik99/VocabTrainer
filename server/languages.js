/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function (app) {
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints[3], function (request, response) {
        if(request.params["levelId"]){
            var levelId = +request.params["levelId"];

            database.findLanguagesByLevel(levelId, function (error, results, fields) {
                response.send(results);
            })
        }else{
            response.send([]);
        }
    });
};