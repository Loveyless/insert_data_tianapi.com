const mongoose = require("mongoose")



module.exports = new Promise((resolve, reject) => {

  mongoose.connect("mongodb://localhost:27017/tianapi_com",(err,res) => { 
    if(!err){
      console.log("数据库连接成功");
      resolve(res)
    }else{
      console.log("数据库连接失败",err.message);
      reject(err)
    }
  })

}) 