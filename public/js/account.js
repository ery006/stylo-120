// Dialog functions
$(document).ready( function() {
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
		//var theDialog = $("#dialog").dialog();
		//theDialog.dialog("open");
		//$("#dialog").dialog(opt).dialog("open");
	   $( "#dialog" ).dialog( "open" );
	});
} );

$(document).ready( function() {
			$( "#dialog2" ).dialog({
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

	$( "#opener2" ).on( "click", function() {
			$( "#dialog2" ).dialog({
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
		//var theDialog = $("#dialog").dialog();
		//theDialog.dialog("open");
		//$("#dialog").dialog(opt).dialog("open");
	   $( "#dialog2" ).dialog( "open" );
	});
} );

$(document).ready( function() {
			$( "#dialog3" ).dialog({
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

	$( "#opener3" ).on( "click", function() {
			$( "#dialog3" ).dialog({
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
		//var theDialog = $("#dialog").dialog();
		//theDialog.dialog("open");
		//$("#dialog").dialog(opt).dialog("open");
	   $( "#dialog3" ).dialog( "open" );
	});
} );

