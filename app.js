var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Check your log');
});

app.listen(3000);