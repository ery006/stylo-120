
/*
 * GET add page.
 */

var data = require('../favorites.json');

exports.view = function(req, res){
  console.log(data.locs);
  console.log(data.result);
  console.log("------------ deleting -------------");
  delete data.result[1];
  console.log(data.result);
  res.render('manage', data);
};
