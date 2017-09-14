var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.render('default.htm');
  });

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);