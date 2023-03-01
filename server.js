// console.log("Hello World");
// const fs = require('fs');
var http = require('http');
 
// http.createServer(function (req, res) {
//     const url = req.url;
//     if(url === '/home'){
//       res.write('Welcome home');
//     } else if(url === '/about'){
//       res.write('Welcome to About us page');
//     } else if(url === '/node'){
//       res.write('Wrlcome to Node js page');
//     }

// }).listen(4000);

http.createServer(function (req,res) {
    res.setHeader('content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
}).listen(4000);

