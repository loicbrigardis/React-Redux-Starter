var express = require('express');

var app = express();
var PORT = 3000;

app.use('/static', express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render("index");
});


app.listen(PORT, function() {
  console.log("Server live on port " + PORT);
});
