var data = require("../favorites.json");

exports.deleteFavorite = function(request, response) { 
	console.log(data);
	var locName = request.query.deleteLocName;
	var index = 0;
	//console.log(locName);
	//var conceptName = $('#exampleFormControlSelect1').find(":selected").text();

	//console.log(conceptName);

	for(var i = 0; i < data.locs.length; i++) {
		data.locs[i].name;
		if(data.locs[i].name === locName) {
			index = i;
		}
	}

	//console.log("HI");
	
	delete data.locs[index];
	data.locs[index] = {
		
	};

 //  data.locs.push( {
	// 	"name": req.query.name,
	// 	"description": req.query.description,
	// 	"imageURL": "http://lorempixel.com/400/400/people"
	// });

	response.render('manage', data);
 }