var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var file_data = fs.readFileSync('index.html')
  response.send(file_data.toString()); 
});

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

