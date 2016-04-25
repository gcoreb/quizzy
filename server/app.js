var http = require('http');

const PORT=8080; 

function handleRequest(request, response){
    console.log('handling a new request');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("listenig on ", PORT);
});