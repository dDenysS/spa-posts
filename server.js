const send = require('koa-send')
const serve = require('koa-static')

const Koa = require('koa')
const path = require('path')

const app = new Koa()

app.use(serve('dist'))

app.use(async ctx => {
  await send(ctx, path.join('dist', 'index.html'))
})

app.listen(process.env.PORT || 3000)
