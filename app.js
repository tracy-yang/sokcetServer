const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors');

app.use(cors(
    {
        origin: function (ctx) {
            return "*"; 
        }
    }
));
app.use(bodyparser());
router(app)
app.listen(3000)