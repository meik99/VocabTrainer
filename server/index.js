var production = false;

var express = require("express");
var bodyparser = require("body-parser");
var passport = require("passport");
var cors = require("cors");

var database = require("./database/dbconnector");
var server_properties = require("./configs/server_properties.json");
var endpoints = require("./configs/endpoints.json");

if(production){
    var https = require('https');
    var fs = require('fs');
    var certificates = require("./configs/confidential/certificate.json");
    var privateKey  = fs.readFileSync(certificates.privkey, 'utf8');
    var certificate = fs.readFileSync(certificates.cert, 'utf8');
    var credentials = {key: privateKey, cert: certificate};
}else{
    var http = require('http');
}
var app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function (request, response) {
    var result = "<p>Avaiable endpoints:</p>";
    result +="<ul>";

    for(var attribute in endpoints){
        result += "<li>";

        result += endpoints[attribute];

        result += "</li>";
    }

    result += "</ul>";

    response.send(result);
});

require("./types")(app);
require("./levels")(app);
require("./languages")(app);
require("./units")(app);
require("./vocabs")(app);
require("./words")(app);
require("./administration/login")(app);

if(production) {
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(server_properties.port);
}else{
    var httpServer = http.createServer(app);
    httpServer.listen(server_properties.port);
}