// Dialog functions
$( function() {
	$( "#dialog" ).dialog({
	  autoOpen: false,
	  show: {
	    effect: "blind",
	    duration: 1000
	  },
	  hide: {
	    effect: "explode",
	    duration: 1000
	  }
	});

	$( "#opener" ).on( "click", function() {
	  $( "#dialog" ).dialog( "open" );
	});
} );

$( function() {
    $( 'input[type="radio"]' ).checkboxradio({
      icon: false
    });
  } );
