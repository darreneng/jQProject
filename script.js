$(document).ready(function() {
	width = 40; height = 40;
	setUp(width, height);
	console.log("stuff");
	//$('#grid').append('<div class="square"></div>');

	$('#reset').click(function() {
		$('.square').css("background-color", "rgba(0, 0, 0, 0)");
	});

	$('#change').click(function(){
		width = $('#width').val();
		height = $('#height').val();
		console.log("width: " + width + " | height: " + height);
		$('tr').remove();
		setUp(width, height);
	});

	$('.square').mouseenter(function() {
		//console.log();
		
		//var opacity = $(this).css("opacity");
		//$(this).css("background-color", "black");
		$(this).mouseleave(function() {
			//$(this).css("background-color", "blue");

			$(this).toggleClass("miso");
			/*
			if (opacity <= 0) {
				$(this).css("background-color", "blue");
			} else {
				$(this).css("background-color", "rgba(0, 0, 0, 0)");
			} */
		}) 
	});

	

	


});



var setUp = function(width, height) {
	//alert("width: " + width + " | height: " + height);
	for (var i = 0; i < height; i++) {
		$('#grid').append('<tr class=row></tr>');
	}
	for (var j = 0; j < width; j++) {
		$('.row').append('<td class=square></td>');
	}
	//$('div').append('<div class="square"></div>');
}