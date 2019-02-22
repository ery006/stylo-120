var data = require("../favorites.json");
var locations = require("../public/locations.json")

exports.addFavorite = function(request, response) { 
	//console.log(request.query);
	// console.log(locations);
	var locName = request.query.locName;
	var index = 0;
	//var conceptName = $('#exampleFormControlSelect1').find(":selected").text();

	//console.log(conceptName);

	for(var i = 0; i < locations.locations.length; i++) {
		if(locations.locations.name == locName) {
			index = i;
		}
	}

	if(index === 0) {
		data.locs.push( {
		"name": locName,
		"description": locName + " is great for all things!",
		"hours": "Hours: Mon-Sat 8am-10pm",
		"address": "123 Address St. La Jolla, CA",
		"seating": "20 Available seats.",
		"imageURL": "https://www.c-ville.com/wp-content/uploads/2015/05/Library_StephenBarling-660x335.jpg"
		});
	}

	else {
		data.locs.push(locations.locations[index]);
	}
 //  data.locs.push( {
	// 	"name": req.query.name,
	// 	"description": req.query.description,
	// 	"imageURL": "http://lorempixel.com/400/400/people"
	// });

	response.render('manage', data);
 }


