const koa = require('koa');
const bodyParse = require('koa-body');
const app = new koa();


app.use(bodyParse({
  json: false
}));
app.use(async (ctx,next)=>{
  console.log(ctx.request.body);
  ctx.body = 'got it';
});
app.listen(8989);
