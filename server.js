var express          = require('express'),
	serverController = require('./server/controllers/server-controller'),
	bodyParser       = require('body-parser'),
	mongoose		 = require('mongoose'),
	//reload 			 = require('reload'),
    app     	     = express();	
	
mongoose.connect('mongodb://localhost:27017/meanhr');
app.use(bodyParser());
	
app.get('/',function(req,res){
	//console.log(req);
	res.sendFile(__dirname+'/client/views/index.html');
});
app.get('/hr',function(req,res){
	res.sendFile(__dirname+'/client/views/main_menu_hr.html');
});
app.get('/hrtrain',function(req,res){	
	res.sendFile(__dirname+'/client/views/train.html');
});
app.get('/hrjob',function(req,res){	
	res.sendFile(__dirname+'/client/views/job.html');
});

//////employee information
app.get('/editprofile',function(req,res){
	res.sendFile(__dirname+'/client/views/employeeinfo/editprofile.html');
});
app.get('/feedback',function(req,res){
	res.sendFile(__dirname+'/client/views/employeeinfo/feedback.html');
});
app.get('/employeedetails',function(req,res){
	res.sendFile(__dirname+'/client/views/employeeinfo/employeedetails.html');
});


///training
app.get('/technical',function(req,res){
	res.sendFile(__dirname+'/client/views/training/technical.html');
});
app.get('/personal',function(req,res){
	res.sendFile(__dirname+'/client/views/training/personal.html');
});
app.get('/career',function(req,res){
	res.sendFile(__dirname+'/client/views/training/career.html');
});
app.get('/lms',function(req,res){
	res.sendFile(__dirname+'/client/views/training/lms.html');
});

///////job application
app.get('/jobform',function(req,res){
	res.sendFile(__dirname+'/client/views/jobapplication/jobform.html');
});
////////payroll
app.get('/pay',function(req,res){
	res.sendFile(__dirname+'/client/views/payroll/pay.html');
});
app.get('/attendance',function(req,res){
	res.sendFile(__dirname+'/client/views/payroll/attendance.html');
});
/////health
app.get('/employee',function(req,res){
	res.sendFile(__dirname+'/client/views/health/employee.html');
});
app.get('/employer',function(req,res){
	res.sendFile(__dirname+'/client/views/health/employer.html');
});

////resourcing
app.get('/rec',function(req,res){
	res.sendFile(__dirname+'/client/views/resourcing/rec.html');
});

app.post('/api/editprofile',serverController.create);
app.get('/api/editprofile',serverController.list);

app.use(express.static('client'));

app.listen(3000,function(){
	console.log("I am listening");
});
