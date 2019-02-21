var data = require("../locations.json");

exports.addFavorite = function(request, response) { 
  data.locations.push( {
		"name": request.query.name,
    // "description": request.query.description,
    // "hours": request.query.hours,
    "address": request.query.address,
    // "seating": request.query.seating
		// "imageURL": request.query.imageURL
	});

	response.render('index', data);
 }
