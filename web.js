var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var output_data = fs.readFileSync('index.html', "utf8").toString;

var string_data = output_data.toString;

app.get('/', function(request, response) {
  response.send(string_data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
