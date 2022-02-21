const express = require('express');
const app = express();

app.get('/', function (req, res) {
 res.send('Hello World!');
});

//app.listen(3000, function () {
//});

(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT); // Heroku用