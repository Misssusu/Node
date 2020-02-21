const http = require('http');
const server = http.createServer();
server.on('request',(request,response)=>{
  let { method, headers, url } = request;
  console.log(url);
  const reSent = http.request({
    host: 'cnodejs.org',
    path: url,
    method,
    headers
  },(resRec)=>{
    let resHeaders = resRec.headers;
    console.log(resHeaders);
    let keys = Object.keys(resHeaders);
    console.log(keys);
    for(const k of keys){
      response.setHeader(k,resHeaders[k]);
    }
    resRec.on('data',(data)=>{
      response.write(data);
    });
    resRec.on('end',()=>{
      response.end();
    });
    resRec.on('error',(err)=>{
      console.log(err);
    })
  });

  request.on('data',(data)=>{
    reSent.write(data);
  });
  request.on('end',()=>{
    reSent.end();
  });
  request.on('error',(err)=>{
    console.log(err);
  });
  reSent.on('error',(err)=>{
    console.log(err);
  })
});

server.listen(8989);
