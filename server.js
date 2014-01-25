var http = require("http");
var util = require("util");

var requestNumber = 0;


http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();

	log();

}).listen(8888);


var log = function() {
	requestNumber++;
	var message = util.format('%d requests have been made\n', requestNumber);
	process.stdout.write(message);
};