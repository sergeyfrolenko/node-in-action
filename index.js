const http = require('http');
  
const server = http.createServer((req,res)=>{
  res.end(req.url);
}).listen(8080, ()=>{
  console.log('server starting...');                        });
