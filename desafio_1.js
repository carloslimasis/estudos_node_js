var http = require('http');
var fs = require('fs');
var url = require('url');
var arquive_director = require('./arquive_director');

var server = http.createServer(function (request, response){
	var result = url.parse(request.url, true);

	response.writeHead(200, {"Content-Type": "text/html"});

	fs.readFile(__dirname + arquive_director.getArquive(result.pathname), function(err, html){
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(html);
		response.end();		
	});
});

server.listen(3000, function(){
	console.log('Servidor rodando!');
});