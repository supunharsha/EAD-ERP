var express          = require('express'),
	serverController = require('./server/controllers/production/server-controller'),
	bodyParser       = require('body-parser'),
	mongoose		 = require('mongoose'),
	//reload 			 = require('reload'),
    app     	     = express();	
	
<<<<<<< HEAD

=======
mongoose.connect('mongodb://localhost:27017/EAD');
>>>>>>> 673f5530523414077e26271294f6967ec91fc06a
app.use(bodyParser());

app.get('/',function(req,res){
	res.sendFile(__dirname+'/client/views/index.html');
});
app.get('/signup.html',function(req,res){
	res.sendFile(__dirname+'/client/views/signup.html');
});

<<<<<<< HEAD

=======
app.post('/production/addget',serverController.add);
app.get('/production/addget',serverController.get);

app.post('/inventry/add',serverController.addInventry);
app.get('/inventry/add',serverController.getInventry);
>>>>>>> 673f5530523414077e26271294f6967ec91fc06a

app.use(express.static('client'));

app.listen(3000,function(){
	console.log("I am listening");
});