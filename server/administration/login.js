/**
 * Created by mrynkiewicz on 01/03/17.
 */
module.exports = function (app) {
    var endpoints = require("../configs/endpoints.json");
    var database = require("../database/dbconnector");
    var passport = require("passport");
    var passportLocal = require("passport-local");

    passport.use(new passportLocal.Strategy(
        {passReqToCallback : true},
        function(req, username, password, done) {
            database.findUser(username, function(err, results, fields) {
                if(err){
                    return done(err);
                }
                if(!results || results.length <= 0){
                    return done(null, false, {message: "Incorrect username"});
                }
                if(results.length == 1){
                    if(results[0]["password_hash"] === password){
                        return done(null, {username: username, password: password});
                    }
                }
                if(results.length > 1){
                    console.error("Username not unambiguous");
                    return done(null, false, {message: "Username not unambiguous"});
                }

                return (null, false, {message: "Unexpected error"});
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    app.post(endpoints.login,
        passport.authenticate("local",
            {
                successRedirect: endpoints.loginSuccess,
                failureRedirect: endpoints.loginFailure,
                failureFlash: false }));

};