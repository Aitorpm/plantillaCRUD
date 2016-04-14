// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
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


app.listen(3000);
console.log("Server running on port 3000");