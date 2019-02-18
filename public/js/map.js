var locs;
var markers = [];

$.getJSON( "locations.json", function( json ) {
    locs = json;
});

// Dialog functions
$( function() {
	$( "#dialog" ).dialog({
	  autoOpen: false,
	  show: {
	    effect: "blind",
	    duration: 1000
	  },
	  hide: {
	    effect: "blind",
	    duration: 1000
	  }
	});

	$( "#opener" ).on( "click", function() {
	  $( "#dialog" ).dialog( "open" );
	});
} );

$( function() {
	$( "#dialogColor" ).dialog({
	  autoOpen: false,
	  show: {
	    effect: "blind",
	    duration: 1000
	  },
	  hide: {
	    effect: "blind",
	    duration: 1000
	  }
	});

	$( "#openerColor" ).on( "click", function() {
	  $( "#dialogColor" ).dialog( "open" );
	});
} );

$( function() {
    $( 'input[type="radio"]' ).checkboxradio({
      icon: false
    });
  } );

// Slider distance
$( function() {
    $( "#slider-range-max-dist" ).slider({
      range: "max",
      min: 1,
      max: 20,
      value: 2,
      slide: function( event, ui ) {
        $( "#distance" ).val( ui.value + " mi" );
      }
    });
    $( "#distance" ).val( $( "#slider-range-max-dist" ).slider( "value" ) );
  } );

// Slider price
$( function() {
    $( "#slider-range-max-price" ).slider({
      range: "max",
      min: 0,
      max: 20,
      value: 2,
      slide: function( event, ui ) {
        $( "#price" ).val( "$" + ui.value );
      }
    });
    $( "#price" ).val( $( "#slider-range-max-price" ).slider( "value" ) );
  } );

function willDelete() {
	alert("This location will be deleted!");
}

// Home screen map
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
	for(i = 0; i < locs.locations.length; i++) {
		var lat = parseFloat(locs.locations[i].lat);
		var long = parseFloat(locs.locations[i].long);
		var latlong = new google.maps.LatLng(lat, long);
		var myCategory = locs.locations[i].category;
		var myTitle = locs.locations[i].name;
		var myIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
		//var infowindow = new google.maps.InfoWindow();
		if(locs.locations[i].category == "favorite") {
			myIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
		}
		else if(locs.locations[i].category == "study") {
			myIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
		}
		marker = new google.maps.Marker({
        	position: latlong,
        	map: map,
        	category: myCategory,
        	title: myTitle,
        	icon: myIcon
        	// label: labels[i]
    	});


		var contentString = '<div id="content">'+
	            '<div id="siteNotice">'+
	            '</div>'+
	            '<h4 id="firstHeading" class="firstHeading">' +
	            locs.locations[i].name + '<input class="star" type="checkbox" title="bookmark page" checked>' +
	            '</h4>'+
	            '<div id="bodyContent">'+
	            '<b>Description</b>' +
	            '<p>' + locs.locations[i].description + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + locs.locations[i].hours + '</p>' +
							'</div>' +
							'<div>' +
	            '<p>' + locs.locations[i].address + '</p>' +
							'</div>' +
							'<div>' +
	            'Open'+
							'</div>' +
							'<div>' +
	            '<p>' + locs.locations[i].seating + '</p>' +
							'</div>' +
							'<div> <img class="infoWindowImage" src=' +
							locs.locations[i].imageURL + '>'
							+
	            '<br/><a href="https://maps.google.com">' +
	            'Directions</a>'
							'</div>' +
	            '</div>'
							'</div>';

		// infowindow = new google.maps.InfoWindow({
		// content: contentString
		// });
		markers.push(marker);

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

	    

	}

}

function setFavGroups() {
	initMap();
	favoriteMap();
}

function setStudyGroups() {
	initMap();
	studyGroupsMap();
}

function favoriteMap() {
	for (i = 0; i < markers.length; i++) {
        var marker = markers[i];
        // If is same category or category not picked
        if (marker.category == "favorite") {

            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
	 
}

function studyGroupsMap() {
	for (i = 0; i < markers.length; i++) {
        marker = markers[i];
        // If is same category or category not picked
        if (marker.category == "study") {
            marker.setVisible(true);
        }
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

function filterMap() {
	var distance = $( "#distance" ).val();
	var price = $( "#price" ).val();
	var arr = [];
	var wifi = "";
	var hour = "";
	var sound = "";
	var myArr = [];

	// for(var i = 0; i < 3; i++) {
	// 	arr.push(false);
	// }
	// arr.push(true);
	// arr.push(true);

	price = price.replace("$", "");
	price = parseInt(price);
	distance = distance.replace("mi", "");
	distance = distance.replace(" ", "");
	distance = parseInt(distance);

	if ($('#wifi').is(":checked"))
	{
		wifi = "true";
	}

	if ($('#hour').is(":checked"))
	{
		hour = "true";
	}

	if ($('#radio-1').is(":checked"))
	{
		sound = "quiet";
	}

	else if ($('#radio-2').is(":checked"))
	{
		sound = "background";
	}

	else if ($('#radio-3').is(":checked"))
	{
		sound = "loud";
	}

	for (var i = 0; i < markers.length; i++) {
        marker = markers[i];
        var curSound = locs.locations[i].sound;
		var curPrice = locs.locations[i].price;
		var curWifi = locs.locations[i].wifi;
		var curHour = locs.locations[i].hour;
		var curDistance = locs.locations[i].distance;



		// for(var j = 0; j < 3; j++) {
		// 	if(arr[i] == true && !(myArr[i]) === (realArr[i])) {
		// 		setTrue = false;
		// 	}
		// }

		if(curPrice <= price && curDistance <= distance) {
			marker.setVisible(true);

		}
        
        // Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
	$( "#dialog" ).dialog( "close" );
}
