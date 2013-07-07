var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (data) {
  response.send(data.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
