
var url = require('url');
var fs = require('fs')
var data = [];

var requestHandler = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);

var headers = defaultCorsHeaders;

  var message;

  var statusCode = 200;
  var urlObj = url.parse(request.url, true)
  if (urlObj.pathname === '/classes/room1' || urlObj.pathname === '/classes/messages') {
    if(request.method === 'GET') {
        headers['Content-Type'] = "application/json";
        statusCode = 200;  
          message = JSON.stringify({results: data});
      }else {
        statusCode = 404;
      }
    }

  if (urlObj.pathname === '/classes/room1' ){
    if(request.method === "POST") {
        data.push(request._postDATA)
        headers['Content-Type'] = "application/json";
        statusCode = 201;
        message = JSON.stringify({results: data})
        response.writeHead(statusCode, headers);

      }
    }
    

  headers['Content-Type'] = "text/plain";

  response.writeHead(statusCode, headers);

  response.end(message);
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports.requestHandler = requestHandler;