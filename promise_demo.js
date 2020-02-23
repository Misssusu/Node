let promise = new Promise((resolve,reject)=>{
  console.log(1);  // 同步执行
  resolve();  // pending -> resolved 状态一旦发生改变就不会再变
  reject();  // pending -> rejected
});
console.log(promise);  // pending
console.log(2);
//promise属于微任务
