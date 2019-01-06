const mysql = require('mysql');
const mysqlConfig = require('../config/config');

console.log(mysqlConfig)
let dbPool = mysql.createPool(mysqlConfig);

function query(sql,value){
    return new Promise((reject,resolve)=>{
        dbPool.getConnection((err,con) =>{
            if(err){
                reject(err)
            }else{
                con.query(sql,value,(err, rows) => {
                    console.log(err,rows,33333)
                    if (err){
                        reject(err);
                    }else{
                        resolve(rows)
                        con.release()
                    }
                })
            }
        })
    })
}

module.exports = query;