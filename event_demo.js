const { EventEmitter }  = require('events');

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter();

function login() {
  console.log('login');
}

emitter.on('login',login);
emitter.on('login',()=>{
  console.log('something else to do');
});
emitter.emit('login');
emitter.off('login',login);
