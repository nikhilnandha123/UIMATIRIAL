var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var route = require('./route');

mongoose.connect("mongodb://localhost:27017/myapp").then(()=>{
console.log("conncted");
app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api',route)
app.listen(3004,()=>{
    console.log("Server Running")
})
}).catch((err)=>{
    console.log(err);
})