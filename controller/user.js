module.exports = {
    getUser:async(ctx, next) => {
       console.log(ctx,111);
    },
    login:async(ctx,next) =>{
        console.log(ctx,222);
    }
}