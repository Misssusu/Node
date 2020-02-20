const fs = require('fs');

function fileExists(path,callback){
  fs.access(path,(error)=>{
    if(error) {
      callback(null,false)
    }else {
      callback(null,true)
    }
  })
}
fileExists('./fs.demo.js',(error,fileexists)=>{
  console.log(fileexists);
});
