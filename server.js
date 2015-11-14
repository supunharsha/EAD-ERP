var express          = require('express'),
	serverController = require('./server/controllers/server-controller'),
	bodyParser       = require('body-parser'),
	mongoose		 = require('mongoose'),
	//reload 			 = require('reload'),
    app     	     = express();	
	
//mongoose.connect('mongodb://localhost:27017/mean-demo');
app.use(bodyParser());
	
app.get('/',function(req,res){
	//console.log(req);
	res.sendFile(__dirname+'/client/views/index.html');
});

app.post('/api/names',serverController.create);
app.get('/api/names',serverController.list);

app.use(express.static('client'));

app.get('/financial',function(req,res){
	//console.log(req);
	res.sendFile(__dirname+'/client/views/main_menu_financial.html');
});

//pages for finacial department

//app.use(express.static('client/views/fragments_financial'));

app.get('/financial-p1',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p1.html');
});
app.get('/financial-p2',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p2.html');
});
app.get('/financial-p3',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p3.html');
});
app.get('/financial-p4',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p4.html');
});
app.get('/financial-p5',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p5.html');
});
app.get('/financial-p6',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p6.html');
});
app.get('/financial-p7',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/p7.html');
});

app.get('/financial-bRe',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/bankReconciliation.html'); 
});

app.get('/financial-bSt',function(req,res){
	res.sendFile(__dirname+'/client/views/fragments_financial/statements.html'); 
});

//end of ajax pages


app.listen(3001,function(){
	console.log("I am listening port 3000");
});