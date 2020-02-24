const koa = require('koa');
const bodyParse = require('koa-body');
const Router = require('koa-router');
const app = new koa();

app.use(bodyParse());
const router = new Router();
let users = [];
router
  .get('/user',async (ctx,next)=>{
    ctx.body = { data: { users } };
  })
  .post('/user',async (ctx,next)=>{
    console.log(ctx.request.body);
    const { user } = ctx.request.body;
    users.push(user);
    ctx.body = { data: { users } };
  });
app.use(router.routes());


app.listen(8989);
