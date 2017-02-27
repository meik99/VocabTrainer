var express = require("express");
var database = require("./database/dbconnector");
var app = express();

var server_properties = {
    port: 8080,
    endpoints: [
        "/vocabtrainer/api/schooltypes"
    ]
}

app.get("/", function (request, response) {
    var result = "<p>Avaiable endpoints:</p>";
    result += server_properties.endpoints;
    response.send(result);
})

app.get(server_properties.endpoints[0], function (request, response) {
    database.findAllSchooltypes(function (error, results, fields) {
        response.send(results);
    });
});

app.listen(server_properties.port, function () {
    console.log("REST-Api running on " + server_properties.port);
})