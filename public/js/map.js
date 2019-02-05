// var locations = [
// 	{lat: 32.876616, lgn: -117.231710},
// 	{lat: 32.868518, lgn: -117.239889},
// 	{lat: 32.870865, lgn: -117.211506},
// 	{lat: -33.848588, lng: 151.209834},
// 	{lat: -33.851702, lng: 151.216968},
// 	{lat: -34.671264, lng: 150.863657},
// 	{lat: -35.304724, lng: 148.662905},
// 	{lat: -36.817685, lng: 175.699196},
// 	{lat: -36.828611, lng: 175.790222},
// 	{lat: -37.750000, lng: 145.116667},
// 	{lat: -37.759859, lng: 145.128708},
// 	{lat: -37.765015, lng: 145.133858},
// 	{lat: -37.770104, lng: 145.143299},
// 	{lat: -37.773700, lng: 145.145187},
// 	{lat: -37.774785, lng: 145.137978},
// 	{lat: -37.819616, lng: 144.968119},
// 	{lat: -38.330766, lng: 144.695692},
// 	{lat: -39.927193, lng: 175.053218},
// 	{lat: -41.330162, lng: 174.865694},
// 	{lat: -42.734358, lng: 147.439506},
// 	{lat: -42.734358, lng: 147.501315},
// 	{lat: -42.735258, lng: 147.438000},
// 	{lat: -43.999792, lng: 170.463352}
// ]

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
		var infowindow = new google.maps.InfoWindow({
		content: content1String
			 });
		marker1.addListener('click', function() {
          infowindow.open(map, marker1);
        });
	// Add a marker clusterer to manage the markers.
	// var markerCluster = new MarkerClusterer(map, markers,
	//     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
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

	// Add a marker clusterer to manage the markers.
	// var markerCluster = new MarkerClusterer(map, markers,
	//     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
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

	// Add a marker clusterer to manage the markers.
	// var markerCluster = new MarkerClusterer(map, markers,
	//     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

// google.maps.event.addDomListener(window, "load", initMap);
