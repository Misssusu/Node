const fs = require('fs');
const fstestobj = {
  name: 'suyuan',
  age: 18
};
let filePath = './fs.test.json';

function fileExists(path,callback){
  fs.access(path,(error)=>{
    if(error) {
      callback(null,false)
    }else {
      callback(null,true)
    }
  })
}
fileExists(filePath,(error,fileexists)=>{
  if(!fileexists) {
    fs.appendFile(filePath,JSON.stringify(fstestobj),(err)=>{
      if (err) console.log(err);
    });
  }else {
    fs.readFile(filePath,(error,data)=>{
      console.log(data.toString('utf-8'));
    })
  }
});
