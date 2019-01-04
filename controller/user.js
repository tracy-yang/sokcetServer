let query = require('../service/mysqlUtil');

userMethods = {
    getUser:async(userName) => {
        query('select * from users where userName = ?',userName).then(data =>{
            console.log(data,111);
        });
        
     },
     login:async(ctx,next) =>{
         console.log(ctx.request.body,333);
        let userName = ctx.request.body.userName;
        let password = ctx.request.body.password
        console.log(userName,password,1111);
         userMethods.getUser(userName);
        // if(userInfo){
        //     query('select * from users where userName=? and password = ?',{userName,password});
        // }
        // console.log(userInfo,11111);
     }
}

module.exports = userMethods;
