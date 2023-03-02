var fs = require('fs');

const requesthandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type=`submit`>Send</button></form></body>");
        res.write("</html>");
        return res.end();
      } 
      
      if(url==='/message' && method==='POST'){
        const body = [];
           req.on('data', (chunk) => {
              body.push(chunk);
           });
           req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
              if(err){
                console.log(err);
              }
              console.log('Inside Fs.readFile()');
              res.statusCode = 302;
              res.setHeader('Location','/');
              return res.end();
            });
           
           });   
      }
        res.setHeader('content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body>Hello From My Node.js Server</body>");
        res.write("</html>");
}

module.exports = requesthandler;
