
/*
 * GET add page.
 */

var data = require('../public/locations.json');

exports.view = function(req, res){
  res.render('confirmation', data);
};
