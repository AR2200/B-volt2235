const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World(*'▽')");
  });
  
app.get('/api/get', function (req, res) {
    res.json('Hello World!');
});

app.post('/api/post', function (req, res) {
    console.log(req.body);
    res.json({test:'Hello World!'});
})

//app.listen(3000, function () {
//});

(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Heroku用