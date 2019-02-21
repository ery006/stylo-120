var emoji = [];

emoji.push("🐮");
emoji.push("🐼");
emoji.push("🐯");
emoji.push("🦄");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function(){
	var x = getRandomInt(4);

  $("#randomEmoji").click(function(){
    	$("#username").append(" " + emoji[x]);
  	});
});
