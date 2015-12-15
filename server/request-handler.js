
var url = require('url');
var data = [];

var requestHandler = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);


  var message;

  var statusCode;


    if(request.method === 'GET') {
      statusCode = 200;
      message = JSON.stringify({results: data})
    }else {
      if(request.method === "POST") {
        statusCode = 201;

      }
    }

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = "text/plain";

  response.writeHead(statusCode, headers);

  response.end("Hello, World!");
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports = requestHandler;