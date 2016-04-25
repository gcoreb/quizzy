var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var request = require('request');
const acstkn;

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/quizlet', function(req, res){
	
	var realCode = req.query.code;
	//res.send('code: ' + req.query.code);
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
	        res.status(500).end("500 - u got swooped boys");
	    } else {
	        console.log(response.statusCode, body);
	        var acstoken = JSON.parse(body).access_token;
	        console.log("access token for bryan chen:" + acstoken);
	        acstkn=acstoken;
	        var resp = {daisytodd: acstoken};
	        res.send(resp);
	    }
	});
});

app.get('sendQuizletSet', function(req, res){
	var title = req.query.title;
	var terms;
	var defs;
	var langterms = "en";
	var langdefs = "en";
	var potHeader = "Authorization: Bearer " + acstkn;
	var url ="https://api.quizlet.com/2.0/sets?title="+title+"&terms=[" + terms  +"]&definitions=["+ defs + "]&lang_terms="+langterms+"&lang_definitions="+lang_defs;

	//post request with new set here
});

app.listen(3000);