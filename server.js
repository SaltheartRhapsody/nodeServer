/*******************************************************************
* Dependencies 
********************************************************************/

// core modules
var http = require("http");
var util = require("util");
var url = require("url");

// gobally installed (on the system) modules
// Note: if these are not included in the application dir, but instead installed globally on your system,
// 		 include an export for NODE_PATH in your bashrc that points to the npm global install directory
var moment = require("moment");


/*******************************************************************
* Helpers 
********************************************************************/



/*******************************************************************
* Exports
********************************************************************/

function start(route, handle) {

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(pathname, handle, response);
	};

	http.createServer(onRequest).listen(8888);
	console.log("Server started at: " + moment().format());	
}

exports.start = start;

