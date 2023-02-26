// console.log("Hello World");
const fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(3000);

fs.writeFileSync('hello.txt', 'Hello  from Node.js');