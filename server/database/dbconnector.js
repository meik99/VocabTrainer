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

exports.findAllSchooltypes = function(callback){
    connection.connect();
    connection.query(queries.findAllSchooltypes, function(error, results, fields){
       if(error) console.log(error);

       callback(error, results, fields);
    });
    connection.end();
}