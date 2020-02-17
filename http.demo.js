const http = require('http');

let count = 0;
const server = http.createServer();
server.on('request',(request,response)=>{
  response.end(`you are the ${count} customer`);
  count++;
});
server.listen(8989);
