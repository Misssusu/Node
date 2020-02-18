const http = require('http');

const server = http.createServer();
server.on('request',(request,response)=>{
  const contentType = request.headers['content-type'];
  switch (contentType) {
    case 'text/plain':
      response.setHeader('Content-Type','text/plain');
      let str = '';
      request.on('data',(data)=>{
        str += data.toString('utf-8');
      });
      request.on('end',()=>{
        response.end(`you send text/plain text: ${str}`)
      });
      break;
    case  'application/json':
      response.end('you send application/json');
      break;
    case 'multi-part/form-data':
      response.end('you send form-data');
      break;
    default:
      response.end('not supported content-type');
      break;
  }
});
server.listen(8989);
