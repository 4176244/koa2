const Koa = require('koa'); //引包

const app = new Koa(); //创建koa实例

app.use(async(ctx,next) => {
    await next();

    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello Koa2 ,学习 JavaScript!</h1>';
});

app.listen(3000);

console.log('server is listening at 3000...');