var http = require('http');
//var request = require('request');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
  //console.log(req);
}

// var doReq = function(code) {
// request({
//     url: 'https://api.quizlet.com/oauth/token?grant_type=authorization_code&code="+code+"&redirect_uri=http://kushaltirumala.github.io/quizzy/analyze.html',
//     method: 'POST', 
//     headers: { 
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'Authorization': 'Basic NG1zVThQNGMyQjpjbVRYeXB1N1FZcFUzN2NTYnp1ejJI'
//     }
// }, function(error, response, body){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(response.statusCode, body);
//     }
// });
// }


var server = http.createServer(requestListener);
server.listen(8080, function() {
	console.log('listenin on port 8080');
});