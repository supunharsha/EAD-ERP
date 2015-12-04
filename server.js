var express          = require('express'),
	serverController = require('./server/controllers/production/server-controller'),
	bodyParser       = require('body-parser'),
	mongoose		 = require('mongoose'),
	//reload 			 = require('reload'),
    app     	     = express();	
	
mongoose.connect('mongodb://localhost:27017/EAD');
app.use(bodyParser());
	
app.get('/',function(req,res){
	//console.log(req);
	res.sendFile(__dirname+'/client/views/index.html');
});

app.post('/production/addget',serverController.add);
app.get('/production/addget',serverController.get);

app.post('/inventry/add',serverController.addInventry);
app.get('/inventry/add',serverController.getInventry);

app.use(express.static('client'));

app.listen(3000,function(){
	console.log("I am listening");
});