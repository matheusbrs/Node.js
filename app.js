const Express = require('express');
const app = Express();

app.listen('8081',()=>{
  console.log('servidor esta funcionando na porta 8081');
});

app.get('/servidor/:id',function(req,res){
  if(req.params.id == "1"){
    res.send('voce esta em artigos');
  }else{
    res.send('errado');
  }
})