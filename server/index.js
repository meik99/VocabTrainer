var express = require("express");
var cors = require("cors");
var database = require("./database/dbconnector");
var server_properties = require("./configs/server_properties.json");
var endpoints = require("./configs/endpoints.json");
var app = express();

app.use(cors());

app.get("/", function (request, response) {
    var result = "<p>Avaiable endpoints:</p>";
    result +="<ul>";

    endpoints.forEach(function (item, index) {
        result += "<li>";
        result += item;
        result += "</li>";
    });

    result += "</ul>";

    response.send(result);
});

require("./types")(app);
require("./levels")(app);
require("./languages")(app);

app.listen(server_properties.port, function () {
    console.log("REST-Api running on " + server_properties.port);
});