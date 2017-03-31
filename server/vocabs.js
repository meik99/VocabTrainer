/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function (app) {
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints.vocabsByUnitId, function(request, response){
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

    app.post(endpoints.vocabs, function (request, response) {
        var vocab = request.body.vocab;
        var unit = request.body.unit;
        if(vocab && unit){
            database.createVocab(vocab, unit, function (err, result, fields) {
               if(err) response.send({});
               else response.send(result);
            });
        }else{
            response.send({});
        }
    });
};