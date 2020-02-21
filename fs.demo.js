const fs = require('fs');
let fstestobj = {
  name: 'suyuan',
  age: 28
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
    fs.readFile(filePath,[null,'r+'],(error,data)=>{
      if(error){
        console.log(error);
      }else {
        console.log('write');
        fs.writeFile(filePath,JSON.stringify(fstestobj),(error)=>{
          console.log(data);
        });
      }
    })
  }
});
