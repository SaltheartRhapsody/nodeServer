/*******************************************************************
* Dependencies 
********************************************************************/

var http = require("http");
var util = require("util");
var moment = require("moment");


/*******************************************************************
* Helpers 
********************************************************************/

var onRequest = function(request, response) {

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();

	log();
};

var requestNumber = 0;
var log = function() {
	requestNumber++;
	var message = util.format('%d requests have been made\n', requestNumber);
	process.stdout.write(message);
};


/*******************************************************************
* Exports
********************************************************************/

function start() {
	http.createServer(onRequest).listen(8888);
	console.log("Server started at: " + moment().format());	
}

exports.start = start;

