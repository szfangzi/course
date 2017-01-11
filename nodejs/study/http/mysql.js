var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  database:'todolist',
  user:'root'
});
db.connect();
var query = db.query('select * from list', function (err, rows, fields) {
  if(err){
    console.log(err);
  }else{
    for (var i = 0; i < rows.length; i++) {
      console.log(rows[i].name);
    }
  }

});
//console.log(query);
db.end();
db.on('error', function () {
  console.log('db error');
});

//process.on('uncaughtException', function (err) {
//  console.log(err);
//});
