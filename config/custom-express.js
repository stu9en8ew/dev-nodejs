var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    app.use(express.static('./assets'));
    app.set('view engine', 'ejs');
    app.set('views','./views');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    

    consign()
    .include('routes')
    .then('infra')
    .into(app);

    return app;
}
