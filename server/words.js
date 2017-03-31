/**
 * Created by mrynkiewicz on 28/02/17.
 */
module.exports = function (app) {
    var endpoints = require("./configs/endpoints.json");
    var database = require("./database/dbconnector");

    app.get(endpoints.wordsByVocabId, function (request, response) {
        var vocab = request.params["vocabId"];

        if(vocab){
            var vocabId = +vocab;
            database.findWordsByVocab(vocabId, function (error, results, fields) {
               response.send(results);
            });
        }else{
            response.send([]);
        }
    });

    app.get(endpoints.wordById, function (request, response) {
       var word = request.params["wordId"];
       if(word){
           var wordId = +word;
           database.findWordById(wordId, function (error, results, fields) {
               if(results.length >= 1){
                   response.send(results[0]);
               }else{
                   console.error("Word ids not unambiguous");
                   response.send({});
               }
           });
       }else{
           response.send({});
       }
    });

    app.post(endpoints.words, function (request, response) {
        var word = request.body.word;
        if(word){
            database.createWord(word, function(err, results, fields){
                console.log(results[0]);
                if(err) response.send({});
                else response.send(results[0]);
            });
        }else{
            response.send({});
        }
    });
};