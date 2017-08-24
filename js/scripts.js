$(function() {
	//Color on button when started
	$('#front').css("background-color", "#2eca7f");

	$('#front').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-front');
	});

	// $('#left').on('click', function() {
	// 	$('#cube')
	// 		.removeClass()
	// 		.addClass('cube')
	// 		.addClass('show-left');
	// });

	$('#top').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-top');
	});

	$('#right').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-right');
	});

	$('#bottom').on('click', function() {
		$('#cube')
			.removeClass()
			.addClass('cube')
			.addClass('show-bottom');
	});

	//Color change in navibuttons
	$('ul li a').click(function(){
		$('ul li a').css("background-color", "")
			$(this).css("background-color", "#2eca7f");
	});




//Resume hover


});