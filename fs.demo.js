const fs = require('fs');
const fstestobj = {
  name: 'suyuan',
  age: 18
};

function fileExists(path,callback){
  fs.access(path,(error)=>{
    if(error) {
      callback(null,false)
    }else {
      callback(null,true)
    }
  })
}
fileExists('./fs.test.js',(error,fileexists)=>{
  if(!fileexists) {
    fs.appendFile('./fs.test.js',fstestobj,(err)=>{
      if (err) console.log(err);
    })
  }
});
