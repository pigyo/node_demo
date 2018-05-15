const Express = require('express');

const app = Express();

app.get('/',function(req, res){
    console.log('hello');
    console.log(req);
    res.send('hello world');
});

app.listen(3000,function(){
    console.log('start listen http://localhost:3000/');
});