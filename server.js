var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

var Articles = require('./models/articles.js');
var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI || 'mongodb://localhost/nytmern';
mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', function (err) {
   console.log('Mongoose Error: ', err);
});

db.once('open', function () {
   console.log('Mongoose connection successful.');
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

app.get('/api', function(req, res) {

  Articles.find({}).sort('-date').exec(function(err, doc){

           if(err){
             console.log(err);
           }
           else {
             res.send(doc);
           }
    });
});


app.post('/api/', function(req, res){
       var newArticle = new Articles(req.body);
       console.log(req.body);

      newArticle.save(function(err, doc){
              if(err){
                console.log(err);
              }

              else{
                   res.send("Updated Click Count!");
              }
       });
  });


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
