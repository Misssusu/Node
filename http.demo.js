const http = require('http');
const url = require('url');
const server = http.createServer();
let users = [];
server.on('request',(request,response)=>{
  const contentType = request.headers['content-type'];
  const urlParse = url.parse(request.url,true);
  const pathName = urlParse.pathname;
  console.log(url.parse(request.url));
  switch (pathName) {
    case '/user':
      const method = request.method;
      console.log(method);
      switch (method) {
        case 'POST':
          let str = '';
          request.on('data',(data)=>{
            str += data.toString('utf-8');
          });
          console.log(str);
          request.on('end',()=>{
            let user;
            try {
              user = JSON.parse(str);
            }catch (e) {
              response.statusCode = 400;
              response.end('you send a bab request')
            }
            users.push(user);
            response.end(str)
          });
          break;
        case 'GET':
          const userName = urlParse.query.name;
          console.log(users);
          const user = users.find((u)=>{
            console.log(u);
            console.log(u.name);
            console.log(userName);
            return u.name === userName;
          });
          console.log(user);
          response.setHeader('Content-Type','application/json');
          response.end(JSON.stringify(user));
          break;
      }
      break;
    case 'list':
      break;
    default:
      response.statusCode = 404;
      response.end();
      break
  }
  // switch (contentType) {
  //   case 'text/plain':
  //     response.setHeader('Content-Type','text/plain');
  //     let str = '';
  //     request.on('data',(data)=>{
  //       str += data.toString('utf-8');
  //     });
  //     request.on('end',()=>{
  //       response.end(`you send text/plain text: ${str}`)
  //     });
  //     break;
  //   case  'application/json':
  //     response.end('you send application/json');
  //     break;
  //   case 'multi-part/form-data':
  //     response.end('you send form-data');
  //     break;
  //   case 'application/x-www-form-urlencoded':
  //     let resp = '';
  //     request.on('data',(data)=>{
  //       console.log(data);
  //       resp += data.toString('utf-8');
  //       console.log(resp);
  //     });
  //     request.on('end',()=>{
  //       response.end(`request data is ${resp}`)
  //     });
  //     break;
  //   default:
  //     response.end('not supported content-type');
  //     break;
  // }
});
server.listen(8989);
