const router = require('koa-router')();
const UserController = require('./controller/user');

module.exports = (app)=>{
    router.post('/login', UserController.login )

    app.use(router.routes())
      .use(router.allowedMethods())
}

