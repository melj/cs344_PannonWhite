

$(window).load(function() {	
	$(".details-link").click(function(e) {
		$(".course-side").toggle();
		$(".details-link").toggle();
	});	
 
	$(".course-option").click(function(e) {

	});

	$(".tf-queue-nav").click(function(e) {		

	});

	$(".tf-queue-option").click(function(e) {		
		$(".tf-queue-option").removeClass("selected");
		$(e.target).addClass("selected");
	});
});