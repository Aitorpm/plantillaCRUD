// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
//var db = mongojs('contactlist', ['contactlist']);
var methodOverride  = require("method-override");
var bodyParser = require('body-parser');
var mongoose=require('mongoose');


require('mongoose-middleware').initialize(mongoose);
mongoose.connect('mongodb://localhost/xino', function(err, res) {
  if(err) throw err;
  console.log('Conectados con éxito a la Base de Datos');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + "/public")); // FRONT-END---> aqui es donde tendremos nuestro html y ccs e imagenes. Esta carpeta tiene que estar en la misma carpeta que esta el server.js


// API Rutas
routes = require('./routes/users')(app);

/*
app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});
*/
app.listen(3000);
console.log("Server running on port 3000");