// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = 3000;

var app = express();

// Static content served from the public directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override POST with method put
app.use(methodOverride('_method'));

// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Importing routes
var routes = require('./controllers/controller.js');

app.use('/', routes);

app.listen(PORT);
