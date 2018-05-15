const Express = require('express');
const helmet =  require('helmet');
const serveStatic = require('serve-static');
// const publicPath = path.join
const app = Express();

app.use(helmet());
app.use(serveStatic('public'));

app.use((req, res, next) => {
    console.log('middleware');
    next();    
})

app.get('/',function(req, res){
    console.log('hello!');
    res.send('hello world');
});

app.get('/home',(req, res) => {
    res.send('hello world');
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    res.send('user id:' + req.params.id)
})

app.get('/home/*',(req, res) => {
    res.send('hello world123');
})




app.listen(3000,function(){
    console.log('start listen http://localhost:3000/');
});