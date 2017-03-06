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
exports.findLanguagesByLevel = function (levelId, callback) {
    connection.query(mysql.format(queries.findLanguagesByLevel, [levelId, levelId]), function (error, results, fields) {
       if(error) console.log(error);

       callback(error, results, fields);
    });
};
exports.findVocabById = function (vocabId, callback) {
    connection.query(mysql.format(queries.findVocabById, [vocabId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    })
};

exports.findVocabsByUnit = function (unitId, callback) {
    connection.query(mysql.format(queries.findVocabsByUnit, [unitId]), function(error, results, fields){
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.findWordsByVocab = function (vocabId, callback) {
    exports.findVocabById(vocabId, function (error, results, fields) {
        if(error) console.log(error);

        if(results.length >= 1){
            var wordId = results[0].word_id;
            var foreignWordId = results[0].foreign_word_id;

            console.log(results[0]);

            connection.query(mysql.format(queries.findWordsByVocab, [wordId, foreignWordId]),
                function (error, results, fields) {
                    if(error) console.log(error);

                    callback(error, results, fields);
            });
        }
    });
};

exports.findWordById = function (wordId, callback) {
    connection.query(mysql.format(queries.findWordById, [wordId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.findLanguageById = function (languageId, callback) {
    connection.query(mysql.format(queries.findLanguageById, [languageId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.findUser = function (username, callback) {
    connection.query(mysql.format(queries.findUserByUsername, [username]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

//CRUD
//Schooltype

exports.findSchooltypes = function(callback){
    connection.query(queries.findSchooltypes, function(error, results, fields){
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.findSchooltypeById = function (typeId, callback) {
    connection.query(mysql.format(queries.findSchooltypeById, [typeId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.createSchooltype = function (type, callback) {
    connection.query(mysql.format(queries.createSchooltype, [type.description]), function(){
        exports.findSchooltypes(callback);
    });
};

exports.updateSchooltype = function (type, callback) {
    connection.query(mysql.format(queries.updateSchooltype, [type.description, type.id]),
        function () {
            exports.findSchooltypes(callback);
    });
};

exports.deleteSchooltype = function (type, callback) {
    connection.query(mysql.format(queries.deleteSchooltype, [type.id]), function () {
        exports.findSchooltypes(callback);
    });
};

//

//Levels

exports.findLevels = function (callback) {
    connection.query(mysql.format(queries.findLevels), callback);
};

exports.findLevelsByType = function (typeId, callback) {
    connection.query(mysql.format(queries.findLevelByType, [typeId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.createLevel = function (level, callback) {
    connection.query(
        mysql.format(queries.createLevel, [level.description, level.schooltype_id]),
        exports.findLevels(callback)
    );
};

exports.updateLevel = function (level, callback) {
    connection.query(
        mysql.format(queries.updateLevel, [level.description, level.schooltype_id, level.id]),
        exports.findLevels(callback)
    );
};

exports.deleteLevel = function (level, callback) {
    connection.query(
        mysql.format(queries.deleteLevel, [level.id]),
        exports.findLevels(callback)
    );
};

//

//Units

exports.findUnits = function (levelId, inputLangId, outputLangId, callback) {
    connection.query(mysql.format(queries.findUnits, [levelId, inputLangId, outputLangId, inputLangId, outputLangId]), function (error, results, fields) {
        if(error) console.log(error);

        callback(error, results, fields);
    });
};

exports.findAllUnits = function (callback) {
    connection.query(mysql.format(queries.findAllUnits), callback);
};

exports.findUnitsByLevel = function (level, callback) {
    connection.query(mysql.format(queries.findUnitsByLevel, [level.id]), callback);
};

exports.findUnitsByType = function (type, callback) {
    connection.query(mysql.format(queries.findUnitsByType, [type.id]), callback);
};

//