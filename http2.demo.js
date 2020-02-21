const http = require('http');

const request = http.request({
  host: 'cn.bing.com',
  path: '/',
  method: 'GET'
},(res)=>{
  let str = '';
  res.on('data',(data)=>{
    console.log(data);
    str += data.toString('utf-8');
  });
  res.on('end',(data)=>{
    console.log(str);
  })
});
request.end();
