const express = require('express');
const app = express();

app.listen('8081',function(){
    console.log('servidor funcionando na porta 8081');
})

app.get("/", function(req,res){
    res.send('Tela Inicial');
})