var port = process.env.PORT || 8080;
var express = require("express");
var path = require("path");

app = express();

function onStart(){
    console.log("Server listening on port", port);
}

app.get("/", (req, res)=>{

})

app.get("/test1", (req, res)=>{
    
})