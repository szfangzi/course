var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

//app.configure(function(){
//  app.set('port', process.env.PORT || 3000);
//  app.set('views', __dirname + '/views');
//  app.set('view engine', 'jade');
//  app.use(express.favicon());
//  app.use(express.logger('dev'));
//  app.use(express.bodyParser());
//  app.use(express.methodOverride());
//  app.use(app.router);
//  app.use(express.static(path.join(__dirname, 'public')));
//});

//app.configure('development', function(){
//  app.use(express.errorHandler());
//});

app.get('/data',function(req,res,next){
  res.jsonp({name:'ken'});
});

app.get('/json',function(req,res,next){
  res.json({status:'json'});
});

http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000 ");
});
