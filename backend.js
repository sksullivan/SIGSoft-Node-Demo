var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
app.use(bodyParser());

posts = [];

app.get('/', function(req,res) {
    console.log("GET /");
    res.sendfile('client.html');
});

app.get('/client.js', function(req,res) {
    console.log("GET /client.js");
    res.sendfile('client.js');
});

app.get('/posts', function(req,res) {
    console.log("GET /posts");
    res.send(posts);
});

app.post('/submit', function(req,res) {
    console.log("POST /submit");
    console.log(req.body);
    posts.push({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    });
    res.send(200);
});

var server = app.listen(3000);
