
/*
 * GET add page.
 */

var data = require('../favorites.json');

exports.view = function(req, res){
  console.log(data.locs);
  res.render('manage', data);
};
