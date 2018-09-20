//var express = require('express');
//var app = express();

var app = require('./config/custom-express')();

app.listen(3000, function(req, res){
  console.log('Server Running');
});

/*
app.get('/', function(req, res){
  res.send("<html><body><marquee behavior='alternate'>Animes</marquee></body></html>");
});
*/
