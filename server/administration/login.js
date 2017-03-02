/**
 * Created by mrynkiewicz on 01/03/17.
 */
module.exports = function (app) {
    var endpoints = require("../configs/endpoints.json");
    var database = require("../database/dbconnector");
    var passport = require("passport");
    var passportLocal = require("passport-local");
    var sha265 = require("sha256");

    passport.use(new passportLocal.Strategy(
        {passReqToCallback : true},
        function(req, username, password, done) {
            password = sha265(password);

            database.findUser(username, function(err, results, fields) {
                if(err){
                    return done(err);
                }
                if(!results || results.length <= 0){
                    return done(null, false, {message: "Incorrect username"});
                }
                if(results.length == 1){
                    if(results[0]["password_hash"] === password){
                        var user = {username: username, password: password};

                        return done(null, user);
                    }else{
                        return done(null, false, {message: "Incorrect password"});
                    }
                }
                if(results.length > 1){
                    console.error("Username not unambiguous");
                    return done(null, false, {message: "Username not unambiguous"});
                }

                return done(null, false, {message: "Unexpected error"});
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    passport.deserializeUser(function(user, done) {
        database.findUser(user, function (err, results, fields) {
            if(results.length > 0) {
                done(null, {username: results[0].username, password: results[1].password_hash});
            }
        });

    });

    app.post(endpoints.login, passport.authenticate("local"),
        function (request, response) {
            console.log("authenticated");
            if(request.user){
                response.send({username: request.user.username, authenticated: true});
            }else{
                response.send({username: null, authenticated: false});
            }
    });

    app.get(endpoints.loginSuccess, function (request, response) {
        if(request.user){
            response.send({username: request.user.username, authenticated: true});
        }else{
            response.send({username: null, authenticated: false});
        }
    });

    app.get(endpoints.loginFailure, function (request, response) {
        console.log("failure");
       response.send({username: null, authenticated: false});
    });
};