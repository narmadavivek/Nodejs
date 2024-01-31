const express = require('express');
const { request } = require('http');
const app = express();
const fs = require("fs");

app.get('/',function(request,response){
    response.json({
        name:"narmada"
    });
})
app.get('/about',function(request,response){
    response.json({
        id:1025
    })
})
app.post('/login',function(request,response){
    response.json({
        message:"hello this is post method"
    })
})
app.listen(3000); 