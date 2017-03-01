var express = require("express");
var cors = require("cors");
var database = require("./database/dbconnector");
var server_properties = require("./configs/server_properties.json");
var endpoints = require("./configs/endpoints.json");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var googleOAuth = require("../configs/confidential/vocabtrainer_google_oauth.json");
var serverconfig = require("../configs/server_properties.json");


passport.use(new GoogleStrategy({
        consumerKey: googleOAuth.installed.client_id,
        consumerSecret: googleOAuth.installed.client_secret,
        callbackURL: serverconfig.oauth_callback_url
    },
    function (token, tokenSecret, profile, done) {
        User.findOrCreate({googleId: profile.id}, function (err, done) {
            return done(err, user);
        });
    }
));

var app = express();

app.use(express.bodyParser());
app.use(cors());

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

app.listen(server_properties.port, function () {
    console.log("REST-Api running on " + server_properties.port);
});