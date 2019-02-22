
/*
 * GET add page.
 */

var data = require('../locations.json');

exports.view = function(req, res){
  res.render('confirmation', data);
};
