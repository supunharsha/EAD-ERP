var express          = require('express'),
	serverController = require('./server/controllers/server-controller'),
	bodyParser       = require('body-parser'),
	mongoose		 = require('mongoose'),
	//reload 			 = require('reload'),
    app     	     = express();	
	
mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(bodyParser());

app.get('/',function(req,res){
	res.sendFile(__dirname+'/client/views/index.html');
});
app.get('/signup.html',function(req,res){
	res.sendFile(__dirname+'/client/views/signup.html');
});

app.post('/api/newusers',serverController.addUsers);
//app.get('/api/names',serverController.list);

app.use(express.static('client'));

app.listen(3000,function(){
	console.log("I am listening");
});