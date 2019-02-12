var homeLocs;
var favLocs;
var studyLocs;
var markers = [];

$.getJSON( "homeLocations.json", function( json ) {
    homeLocs = json;
});

$.getJSON( "favLocations.json", function( json ) {
    favLocs = json;
});

$.getJSON( "studyLocations.json", function( json ) {
    studyLocs = json;
});

// $(function() {

//   $('.dropdown-toggle').on('click', function(event) {
//     $('.dropdown-menu').slideToggle();
//     event.stopPropagation();
//   });

//   $('.dropdown-menu').on('click', function(event) {
//     event.stopPropagation();
//   });

//   $(window).on('click', function() {
//     $('.dropdown-menu').slideUp();
//   });

// });

function initMap() {
	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
<<<<<<< HEAD

	// var allLocations
	// for(var loc in locs.locations) {
	// 	console.log(loc);
	// }

	// // Add some markers to the map.
	// // Note: The code uses the JavaScript Array.prototype.map() method to
	// // create an array of markers based on a given "locations" array.
	// // The map() method here has nothing to do with the Google Maps API.
	// var markers = locations.map(function(location, i) {
	//   return new google.maps.Marker({
	//     position: location,
	//     label: labels[i % labels.length]
	//   });
	// });

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
          position: latlng,
          map: map,
					icon: image
    });
=======
>>>>>>> 09d1190cb44cf2567c4bd4a3826996ed995531fe

	var currentPosition = new google.maps.LatLng(32.877281, -117.234929);

	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 15,
	    center: currentPosition,
	});

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
        	position: currentPosition,
        	map: map,
			icon: image
    });

    // Go get all locations
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
	for(i = 0; i < homeLocs.locations.length; i++) {
		var lat = parseFloat(homeLocs.locations[i].lat);
		var long = parseFloat(homeLocs.locations[i].long);
		var latlong = new google.maps.LatLng(lat, long);
		//var infowindow = new google.maps.InfoWindow();
		marker = new google.maps.Marker({
        	position: latlong,
        	map: map,
        	label: labels[i]
    	}); 

		var contentString = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">' + 
	            homeLocs.locations[i].name +
	            '</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
	            '<p>' + homeLocs.locations[i].description + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + homeLocs.locations[i].hours + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + homeLocs.locations[i].address + '</p>' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '<p>' + homeLocs.locations[i].seating + '</p>' +
							'</div>' +
							'<div> <img class="infoWindowImage" src=' + 
							homeLocs.locations[i].imageURL + '>'
							+ 
	            '<br/><a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';

		// infowindow = new google.maps.InfoWindow({
		// content: contentString
		// });

		marker.contentString = contentString;
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			infowindow.setContent(this.contentString);
			infowindow.open(map, this);
			}
		})(marker, i));
		// marker.addListener('click', function() {
		// 	infowindow.setContent(contentString);
	 //      infowindow.open(map, marker);
	 //    });

	    markers.push(marker);

	}
}

function favoriteMap() {
		// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var currentPosition = new google.maps.LatLng(32.877281, -117.234929);

	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 15,
	    center: currentPosition,
	});

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
        	position: currentPosition,
        	map: map,
			icon: image
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
	for(i = 0; i < favLocs.locations.length; i++) {
		var lat = parseFloat(favLocs.locations[i].lat);
		var long = parseFloat(favLocs.locations[i].long);
		var latlong = new google.maps.LatLng(lat, long);
		//var infowindow = new google.maps.InfoWindow();
		marker = new google.maps.Marker({
        	position: latlong,
        	map: map,
        	label: labels[i]
    	}); 

		var contentString = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">' + 
	            favLocs.locations[i].name +
	            '</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
	            '<p>' + favLocs.locations[i].description + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + favLocs.locations[i].hours + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + favLocs.locations[i].address + '</p>' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '<p>' + favLocs.locations[i].seating + '</p>' +
							'</div>' +
							'<div> <img class="infoWindowImage" src=' + 
							favLocs.locations[i].imageURL + '>'
							+ 
	            '<br/><a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';

		// infowindow = new google.maps.InfoWindow({
		// content: contentString
		// });

		marker.contentString = contentString;
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			infowindow.setContent(this.contentString);
			infowindow.open(map, this);
			}
		})(marker, i));
		// marker.addListener('click', function() {
		// 	infowindow.setContent(contentString);
	 //      infowindow.open(map, marker);
	 //    });

	    markers.push(marker);

	}
}

function studyGroupsMap() {
	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var currentPosition = new google.maps.LatLng(32.877281, -117.234929);

	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 15,
	    center: currentPosition,
	});

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
        	position: currentPosition,
        	map: map,
			icon: image
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
	for(i = 0; i < studyLocs.locations.length; i++) {
		var lat = parseFloat(studyLocs.locations[i].lat);
		var long = parseFloat(studyLocs.locations[i].long);
		var latlong = new google.maps.LatLng(lat, long);
		//var infowindow = new google.maps.InfoWindow();
		marker = new google.maps.Marker({
        	position: latlong,
        	map: map,
        	label: labels[i]
    	}); 

		var contentString = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">' + 
	            studyLocs.locations[i].name +
	            '</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
	            '<p>' + studyLocs.locations[i].description + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + studyLocs.locations[i].hours + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + studyLocs.locations[i].address + '</p>' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '<p>' + studyLocs.locations[i].seating + '</p>' +
							'</div>' +
							'<div> <img class="infoWindowImage" src=' + 
							studyLocs.locations[i].imageURL + '>'
							+ 
	            '<br/><a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';

		// infowindow = new google.maps.InfoWindow({
		// content: contentString
		// });

		marker.contentString = contentString;
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			infowindow.setContent(this.contentString);
			infowindow.open(map, this);
			}
		})(marker, i));
		// marker.addListener('click', function() {
		// 	infowindow.setContent(contentString);
	 //      infowindow.open(map, marker);
	 //    });

<<<<<<< HEAD
	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
					position: latlng,
					map: map,
					icon: image
		});

	var marker1 = new google.maps.Marker({
          position: loc1,
          map: map,
          label: 'A'
    });

    var marker2 = new google.maps.Marker({
          position: loc2,
          map: map,
          label: 'B'
    });

    var marker3 = new google.maps.Marker({
          position: loc3,
          map: map,
          label: 'C'
    });

}

function studyGroupsMap() {
	var latlng = new google.maps.LatLng(32.877281, -113.234929);
	var loc1 = new google.maps.LatLng(32.876616, -114.231710);
	var loc2 = new google.maps.LatLng(32.868518, -114.239889);
	var loc3 = new google.maps.LatLng(32.870865, -113.211506);
	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 12,
	    center: latlng,
	});

	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	// // Add some markers to the map.
	// // Note: The code uses the JavaScript Array.prototype.map() method to
	// // create an array of markers based on a given "locations" array.
	// // The map() method here has nothing to do with the Google Maps API.
	// var markers = locations.map(function(location, i) {
	//   return new google.maps.Marker({
	//     position: location,
	//     label: labels[i % labels.length]
	//   });
	// });

	var image = "https://img.icons8.com/color/26/000000/filled-star.png";
	var currrentLoc = new google.maps.Marker({
					position: latlng,
					map: map,
					icon: image
		});

	var marker1 = new google.maps.Marker({
          position: loc1,
          map: map,
          label: 'A'
    });

    var marker2 = new google.maps.Marker({
          position: loc2,
          map: map,
          label: 'B'
    });

    var marker3 = new google.maps.Marker({
          position: loc3,
          map: map,
          label: 'C'
    });
=======
	    markers.push(marker);
>>>>>>> 09d1190cb44cf2567c4bd4a3826996ed995531fe

	}
}
