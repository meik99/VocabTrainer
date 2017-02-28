/**
 * Created by mrynkiewicz on 1/23/17.
 */
var mysql = require("mysql");
var queries = require("./queries.json");

var exports = module.exports;
var dbconfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "vocabDB"
};
var connection = mysql.createConnection(
    dbconfig
);

connection.connect();

exports.findSchooltypes = function(callback){
    connection.query(queries.findSchooltypes, function(error, results, fields){
       if(error) console.log(error);

       callback(error, results, fields);
    });
}

exports.findLevelsByType = function (typeId, callback) {
    connection.query(queries.findSchooltypes.replace(":id", connection.escape(typeId)), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
}