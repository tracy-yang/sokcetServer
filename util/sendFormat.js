const success = (result,errorMsg)=> {
    return {
        status:200,
        errorMsg:errorMsg,
        data:result
    }
}  

const failed = (status,errorMsg)=>{
    return {
        status:status,
        errorMsg:errorMsg,
    }
}


module.exports ={
    success,
    failed
}