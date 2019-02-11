/*
 * GET home page.
 */

var locations = require('../locations.json');
//var map = require('js/map.js');


exports.view = function(req, res){
  res.render('home');
};