var studyLocs = require('../public/locations.json');

exports.addLocation = function(request, response){

  	var rand = Math.random();

	var locName = request.query.name;
  	var locAddress = request.query.address;
  	var locDescription = request.query.description;
	var lat = "32.876616";
	var lng = -117.231710 + rand;
	//var conceptName = $('#exampleFormControlSelect1').find(":selected").text();

	//console.log(conceptName);

	// var geocoder = new google.maps.Geocoder();
	// // var address = "new york";

	// geocoder.geocode( { 'address': locAddress}, function(results, status) {

	// if (status == google.maps.GeocoderStatus.OK) {
 //    	var latitude = results[0].geometry.location.lat();
 //    	var longitude = results[0].geometry.location.lng();
 //    	alert(latitude);
 //    	} 
	// });


	studyLocs.locations.push( {
		"lat": lat,
		"long": lng.toString(),
		"name": locName,
		"description": locDescription,
		"hours": "Hours: Mon-Sat 8am-10pm",
		"address": locAddress,
		"seating": "20 Available seats.",
		"category": "home",
		"distance": "1",
		"price": "2",
		"wifi": "true",
		"sound": "quiet",
		"hour": "true",
		"imageURL": "https://www.c-ville.com/wp-content/uploads/2015/05/Library_StephenBarling-660x335.jpg"
	});

	// console.log(studyLocs.locations);

	response.render('confirmation', studyLocs);
}