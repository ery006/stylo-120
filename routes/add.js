
/*
 * GET add page.
 */
var data = require('../locations.json');
var studyLocs = require('../locations.json');

exports.view = function(req, res){
  res.render('add');
};

exports.view = function(request, response){
  console.log(data.locs);



	console.log(request.query);
	// console.log(locations);
	var locName = request.query.locName;
  var locAddress = request.query.address;
  var locDescription = request.query.description;
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
		"description": locName + locDescription,
		"hours": "Hours: Mon-Sat 8am-10pm",
		"address": locAddress,
		"seating": "20 Available seats.",
		"imageURL": "https://www.c-ville.com/wp-content/uploads/2015/05/Library_StephenBarling-660x335.jpg"
		});
	}

	else {
		data.locs.push(studyLocations.locations[index]);
	}
 //  data.locs.push( {
	// 	"name": req.query.name,
	// 	"description": req.query.description,
	// 	"imageURL": "http://lorempixel.com/400/400/people"
	// });

	response.render('add', data);
}
