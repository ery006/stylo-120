// var locs = require('../locations.json');

function initMap() {
	var latlng = new google.maps.LatLng(32.877281, -117.234929);
	var loc1 = new google.maps.LatLng(32.876616, -117.231710);
	var loc2 = new google.maps.LatLng(32.868518, -117.239889);
	var loc3 = new google.maps.LatLng(32.870865, -117.211506);
	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 12,
	    center: latlng,
	});

	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
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

	var content1String = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">Location 1</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
							'</div>' +
							'<div>' +
	            'Hours: Mon-Sat 8am-10pm' +
							'</div>' +
							'<div>' +
	            '123 Address St. La Jolla, CA' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '20 Available Seats' +
							'</div>' +
							'<div>' +
	            '<a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';
	var content2String = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">Location 2</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
							'</div>' +
							'<div>' +
	            'Hours: Mon-Sat 8am-10pm' +
							'</div>' +
							'<div>' +
	            '123 Address St. La Jolla, CA' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '20 Available Seats' +
							'</div>' +
							'<div>' +
	            '<a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';
	var content3String = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">Location 3</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
							'</div>' +
							'<div>' +
	            'Hours: Mon-Sat 8am-10pm' +
							'</div>' +
							'<div>' +
	            '123 Address St. La Jolla, CA' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '20 Available Seats' +
							'</div>' +
							'<div>' +
	            '<a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';
	var infowindow1 = new google.maps.InfoWindow({
		content: content1String
	});
	var infowindow2 = new google.maps.InfoWindow({
		content: content2String
	});
	var infowindow3 = new google.maps.InfoWindow({
		content: content3String
	});

	marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
    });
    marker2.addListener('click', function() {
      infowindow2.open(map, marker2);
    });
    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);
    });
}

function favoriteMap() {
	var latlng = new google.maps.LatLng(32.877281, -115.234929);
	var loc1 = new google.maps.LatLng(32.876616, -115.231710);
	var loc2 = new google.maps.LatLng(32.868518, -115.239889);
	var loc3 = new google.maps.LatLng(32.870865, -115.211506);
	var map = new google.maps.Map(document.getElementById('map'),  {
	    zoom: 12,
	    center: latlng,
	});

	// Create an array of alphabetical characters used to label the markers.
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
