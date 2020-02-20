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
fileExists('./fs.test.json',(error,fileexists)=>{
  if(!fileexists) {
    fs.appendFile('./fs.test.json',JSON.stringify(fstestobj),(err)=>{
      if (err) console.log(err);
    })
  }
});
