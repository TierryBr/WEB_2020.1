var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var DisciplinasRoutes = require('./routes/DisciplinasRoutes')

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE")
    next()
})

app.use('/disciplinas', DisciplinasRoutes);

module.exports = app;
