let promise = new Promise((resolve,reject)=>{
  console.log(1);  // 同步执行
  resolve();  // pending -> resolved
  reject();  // pending -> rejected
});
console.log(promise);  // pending
console.log(2);
