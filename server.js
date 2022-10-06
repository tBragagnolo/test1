var port = process.env.PORT || 8080;
var express = require("express");
var path = require("path");

app = express();

function onStart(){
    console.log("Server listening on port", port);
}

app.get("/", (req, res)=>{
    var mes = "";
    mes += "<h2>Declaration</h2><br>";
    mes += "<p>I declare that this test is my own work in accordance with Seneca Academic Policy.</p>";
    mes += "<p>No part of this test has been copied manually or electronically from any other source</p><br>";
    mes += "<p>Name: Tom Bragagnolo</p><br>";
    mes += "<p>Student Number: 139157218</p><br>";
    mes += "<a href = '/test1'>Go to Test1</a>";
    res.send(mes);
})

app.get("/test1", (req, res)=>{
    
})

app.listen(port, onStart);