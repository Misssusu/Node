const koa = require('koa');
const app = new koa();
app.use(async (context,next)=>{
  context.body = 'hello';
});
app.listen(8989);
