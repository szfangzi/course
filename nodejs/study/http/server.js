var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var qs = require('querystring');

var db = mysql.createConnection({
	user:'root',
	host:'localhost',
	database:'task'
});
db.connect();
http.createServer(function(req, res){
	if(req.url == '/'){
		res.writeHead(200, {'Content-Type':'text/html'});
		var stream = fs.createReadStream('index.html');
		stream.pipe(res);
	}else if(req.url == '/list'){
		
		db.query('select * from list',function(err,data,other){
			res.end(JSON.stringify(data));
		});

	}else if(req.url == '/add'){
		var body = '';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			var obj = qs.parse(body);
			db.query('insert into list (name) values("'+obj.name+'")', function(err, data){
				if(!err){
					db.query('select * from list',function(err,data,other){
						var resObj = {data:data, status:"1"};
						res.end(JSON.stringify(resObj));
					});
				}else{
					console.log(err);
					res.end(JSON.stringify({status:"0"}));
				}
			});
			
		});
		
//		
	}else if(req.url == '/del'){
		var body = '';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			var obj = qs.parse(body);
			db.query('delete from list where id='+obj.id, function(err, data){
				if(!err){
					res.end(JSON.stringify({status:"1"}));
				}else{
					console.log(err);
					res.end(JSON.stringify({status:"0"}));
				}
			});
			
		});
	}else if(req.url == '/update'){
		var body = '';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			var obj = qs.parse(body);console.log(obj);
			db.query('update list set isTick='+obj.isTick + ' where id='+obj.id, function(err, data){
				if(!err){
					res.end(JSON.stringify({status:"1"}));
				}else{
					console.log(err);
					res.end(JSON.stringify({status:"0"}));
				}
			});
			
		});
	}else if(req.url == '/jquery.min.js'){
		res.writeHead(200, {'Content-Type':'text/javascript'});
		var stream = fs.createReadStream('jquery.min.js');
		stream.pipe(res);
	}else if(req.url == '/updatename'){
		var body = '';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			var obj = qs.parse(body);console.log(obj);
			db.query('update list set name="'+obj.name + '"  where id='+obj.id, function(err, data){
				if(!err){
					res.end(JSON.stringify({status:"1"}));
				}else{
					console.log(err);
					res.end(JSON.stringify({status:"0"}));
				}
			});
			
		});
	}
	
}).listen(3000, function(){
	console.log('正在监听端口3000');
});

process.on('uncaughtException',function(err){
	console.log(err);
});

//db.connect();
//
////db.query('update list set name=1 where id=1',function(err,data){
////	
////});
////db.query('insert into list (name) values ("asdasd") ',function(err,data){
////	
////});
//db.query('delete from list where id = 3',function(err,data){
//
//});
//db.query('select * from list',function(err,data,other){
//	console.log(data);
//});
//
//db.end();
