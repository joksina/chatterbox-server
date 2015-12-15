
var url = require('url');
var data = {};

var requestHandler = function(request, response) {

  console.log("Serving request type " + request.method + " for url " + request.url);


  var message;

  var statusCode;
  var urlObj = url.parse(request.url, true)


    if(request.method === 'GET') {
      if(url === '/classes/messages') {
          statusCode = 200;  
         message = JSON.parse(JSON.stringify(data))
      }else {
        statusCode = 404;
      }
    } else if(request.method === "POST") {
        statusCode = 201;
        message = JSON.stringify({results: data})
      }

  var headers = defaultCorsHeaders;

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