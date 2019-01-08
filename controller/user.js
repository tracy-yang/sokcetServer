let query = require('../service/mysqlUtil');
let {success,falied} = require('../util/sendFormat');

userMethods = {
    getUser:async(userName) => {
       await query('select * from users where userName = ?',userName)
     },
     login:async(ctx,next) =>{
        let userName = ctx.request.body.userName;
        let password = ctx.request.body.password
        let res;
        await query('select * from users where userName = ? and password = ?',[userName,password]).then(undefined,data=>{
            let userInfo = data[0];
            if(userInfo){
                res = success('','登陆成功！')
            }else{
                res = falied(403,'登陆失败！')
            }
        });
        console.log(res,3333);
        ctx.body = res;
       
     }
}

module.exports = userMethods;
