const express = require("express");
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用
const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: true }));
/*app.get("/", (req, res) => {
  res.send("Hello World(*'▽')");
});*/
app.get("/api/get/", (req, res) => {
  res.json({ message: "こちらはルートパスです(V)o￥o(V)." });
});
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.post('/', function(req, res) {
  const data = req.body;
  console.log('req.body', data);
  const messageId = data["events"][0]["message"]["id"];
  console.log(messageId);
  res.send('api: OK');
  const options = {
    url: `https://api-data.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
    method: 'get',
    headers: {
       'Authorization': 'Bearer ' + accessToken,
    },
    encoding: null
  };
  request(options, function(error, response, body) {
    const buffer = new Buffer.from(body);
    console.log(buffer);
  });
});
//ローカル用サーバ

process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用

/* const request = require('request');

const options = {
  url: `https://api-data.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
  method: 'get',
  headers: {
     'Authorization': 'Bearer ' + accessToken,
  },
  encoding: null
};

request(options, function(error, response, body) {
  const buffer = new Buffer.from(body);
  console.log(buffer);
});
*/
