const express = require("express");
const app = express();
const db = require("./db.js");

db.then(
  (ret) => {










    



  },
  (ret) => {}
);

app.listen(3000, (err) => {
  if (!err) console.log("服务器启动成功");
  else console.log("服务器启动失败", err);
});
