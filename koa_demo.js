const koa = require('koa');
const app = new koa();
function middleWare(options){
  if(options.user){
    return async (ctx,next)=>{ ctx.body='success' }
  }else {
    next();
  }
}
app.use(middleWare({user: true}));
app.listen(8989);
