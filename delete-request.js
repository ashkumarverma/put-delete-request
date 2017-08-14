var http = require('http');

http.createServer(function (request, response) {
  console.log([request.method, request.url, request.httpVersion]);
  console.log(request.headers);
  console.log();
  response.end(request.method + ' request finished\n');
}).listen(1337);


 http.request({
    hostname: 'localhost',
    method: 'DELETE',
    path: '/',
    port: 1337
  }, function (response) { response.pipe(process.stdout, { end: false }); }).end(); 
