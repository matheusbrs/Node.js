const express = require('express');
const app = express();

app.listen('8081', function(){
    console.log('servidor esta funcionando na porta 8081');
});

app.get('/artigos/:id',function(req,res){
    if(req.params.id == 1){
        res.send('voce esta na aba de artigos');
    }if(req.params.id == 2){
        res.send('22222222222222s');
    }
})