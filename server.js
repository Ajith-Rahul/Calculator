//const circle = require('./public/funcs.js');
var express = require('express');
var moment= require('moment')
var app = express();

app.use(express.static(__dirname + '/public'));
 var log=function(message){
   var time=moment().format()
     console.log('[server] @'+time+' '+messages)
   
 }
 var adder=function(num1,num2){
   var result=num1+num2;
   return result
 }
app.get('/adder',function(req,res){
   log('Adder Request Made')
   var num1=parseInt(req.query.num1);
   var num2=parseInt(req.query.num2);
   var result=adder(num1,num2)
   res.send(''+result+'')
   console.log('result',result)
 })
 var port = 3000;
 app.listen(port);
 console.log(port);