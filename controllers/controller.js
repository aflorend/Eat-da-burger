// Dependencies
var express = require('express');

var router = express.Router();

// Import model to use database functions
var burger = require('../models/model.js');

// Creating all routes and logic
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function(req, res) {
  burger.create([
    'burger', 'eaten'
  ], [
    req.body.burger, req.body.eaten
  ], function() {
    res.redirect('/');
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.update({
    eaten: req.body.eaten
  }, condition, function() {
    res.redirect('/');
  });
});

// Export routes for server
module.exports = router;
