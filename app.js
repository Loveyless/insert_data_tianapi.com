const express = require("express");
const app = express();
const db = require("./db.js");
const axios = require("axios");

// joke数据库
const jokeModel = require("./mongoose_Model/joke.js");

app.use(express.json()); //解析json
app.use(express.urlencoded({ extended: true })); //解析urlencoded

const KEY = "bba54c417b3678e22505a1ef69b47fd0";

db.then(
  async (ret) => {



    // // 循环获取笑话数据
    // const timer = setInterval(async () => {

    //   //请求过来笑话数据
    //   const {data} = await axios.get(
    //     `http://api.tianapi.com/joke/index?key=${KEY}&num=10`
    //   );
  
    //   console.log(data.newslist);
    //   //存入笑话数据
    //   jokeModel.create(data.newslist, (err, data) => {
    //     if(err){
    //       console.log("joke save lost",err.message);
    //       //失败就结束循环
    //       clearInterval(timer)
    //     }else{
    //       console.log("joke save success");
    //     }
    //   });

    // }, 2000);





  },
  (ret) => {}
);

app.listen(3000, (err) => {
  if (!err) console.log("服务器启动成功");
  else console.log("服务器启动失败", err);
});
