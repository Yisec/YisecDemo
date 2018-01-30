// 启动一个静态服务，如果路由存在的话就访问静态文件，不存在的话就返回指定的静态资源
const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')({multipart: true})
const serve = require('koa-static')
const cors = require('koa-cors')
const compress = require('koa-compress')
const fs = require('fs')
const path = require('path')

app.use(cors({
    // Access-Control-Allow-Credentials 是否可以带cookie
    credentials: true,
    // XMLHttpRequest 2.0 可以解析reponse headers
    // Access-Control-Expose-Headers 可以被解析
    // expose: ['aaa', 'bbb'],
    // Access-Control-Max-Age
    // maxAge: 60 * 60 * 24 * 30, // 缓存
    // Access-Control-Allow-Headers 可用请求头
    headers: ['Keep-Alive', 'User-Agent' ,'X-Requested-With' ,'If-Modified-Since' ,'Cache-Control' ,'Content-Type' ,'Authorization']
}))

// 开启gzip
app.use(compress({
    filter: function(content_type) {
        //  js/css/json/image
        return /(application\/javascript|text\/css|application\/json|image\/jpeg|image\/png|image\/gif|image\/webp)/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
}))

app.use(serve(path.resolve(__dirname, './../dist')))

// 路由
router.all('/*', (ctx, next) => {
    const pathname = path.resolve(__dirname, './../index.html')
    if (fs.existsSync(pathname)) {
        const stat = fs.statSync(pathname)
        if (stat.isFile()) {
            ctx.res.setHeader('Content-Length', stat.size)
            ctx.res.setHeader('Content-Type', 'text/html')
            ctx.body = fs.createReadStream(pathname)
        }
    } else {
        ctx.body = 'not found'
    }
});
app.use(router.routes()).use(router.allowedMethods());

const PORT = 8965
app.listen(PORT, () => {
    console.log(`打开 http://localhost:${PORT}`);
});
