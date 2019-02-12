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

$('.dropdown-toggle').on('click', function (e) {
  $(this).next().toggle();
});
$('.dropdown-menu.keep-open').on('click', function (e) {
  e.stopPropagation();
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

	    markers.push(marker);

	}
}
