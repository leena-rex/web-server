var express = require('express');
var app = express();
//constant
var PORT = 3000;

var middleware = require('./middleware.js');

// needs to be at the top of the app
app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,middleware.logger, function(req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname + '/public');


app.listen(PORT, function(){
	console.log ('Express server started in port : ', PORT);	
});