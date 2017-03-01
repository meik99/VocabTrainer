/**
 * Created by mrynkiewicz on 01/03/17.
 */
module.exports = function (app) {
    var endpoints = require("../configs/endpoints.json");
    var passport = require("passport");

    app.get(
        endpoints.login,
        passport.authenticate(
            'google',
            {
                scope: ['https://www.googleapis.com/auth/plus.login']
            }
        )
    );

    app.get(endpoints.loginCallback,
        passport.authenticate('google', { failureRedirect: 'http://localhost:4200/administration/login' }),
        function(req, res) {
            res.redirect('http://localhost:4200/administration/manage');
        });
};