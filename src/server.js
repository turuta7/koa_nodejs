const Koa = require('koa');

const app = new Koa();

const config = require('./config');

app.use(async ctx => {
  ctx.body = 'hello world22';
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${config.server.port}`);
});
