const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');

app.use(cors(
    {
        origin: '*'
        // allowedHeaders: 'Origin, x-requested-with, Content-Type, X-Token', //X-Token为自定义的头字段
        // credentials: true //设置成true 请求中才会带上cookie信息，否则请求失败
    }
));
app.use(bodyparser());
router(app)
app.listen(3000)