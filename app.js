const fs = require('fs');
const express = require('express');
const app = express();
const port = 3001;
app.post('/create-file',(req,res)=>{
fs.writeFile('./current date-time.txt','hello world',(err)=>{
    if(err){
        console.log('created not successfully');
    }else{
        console.log('created successfully')
    }
})
})

   app.get('/retrieve-file',(req,res)=>{
     fs.readFile('./current date-time.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log('read not success');
    }else{
        console.log('read success');
        console.log(data);
    }
})}) 
    
app.listen(3001);

