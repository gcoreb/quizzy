var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var request = require('request');

app.get('/quizlet', function(req, res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
	var realCode = req.query.code;
	res.send('code: ' + req.query.code);
	request({
	    url: 'https://api.quizlet.com/oauth/token?grant_type=authorization_code&code='+realCode+'&redirect_uri=http://kushaltirumala.github.io/quizzy/analyze.html', 
	    method: 'POST', 
	    headers: { 
	        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	        'Authorization': 'Basic NG1zVThQNGMyQjpjbVRYeXB1N1FZcFUzN2NTYnp1ejJI'
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log(response.statusCode, body);
	        //var jsonbody = JSON.parse(body);
	        console.log("acces token for bryan chen:" + JSON.parse(body).access_token);
	        

	    }
	});

});


app.listen(3000);