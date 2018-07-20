require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var sequelize = require("./db");
var student = require('./controllers/studentcontroller');

var cors = require('cors');
app.use(cors());

sequelize.sync(); // {force: true}
app.use(bodyParser.json());

app.use('/student', student);

app.listen(process.env.PORT, function(){
    console.log('App is listening on 3000.')
});