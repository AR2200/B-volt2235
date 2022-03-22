const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用
const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World(*'▽')");
});
app.get("/api/get/", (req, res) => {
  res.json({ message: "こちらはルートパスです(V)o￥o(V)" });
});
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.post('/', function(req, res) {
  const data = req.body;
  console.log('req.body', data);
  res.send('api: OK');
});
//ローカル用サーバ
app.listen(3000, () => {
  console.log("Application started");
});
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用
