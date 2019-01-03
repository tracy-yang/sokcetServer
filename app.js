const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyparser = require('koa-bodyparser');
const mysql = require('koa-mysql');
const mysqlConfig = require('./config/config');

let db = mysql.createPool(mysqlConfig);


app.use(bodyparser());
router(app)
app.listen(3000)