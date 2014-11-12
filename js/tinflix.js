var courseMap = {
	'CPSC310' : {title: "The course name", code: "CPSC 310", shortDescription: "Short description for CPSC 310", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'MATH100' : {title: "The course name", code: "MATH 100", shortDescription: "Short description for MATH 100", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'CHEM204' : {title: "The course name", code: "CHEM 204", shortDescription: "Short description for CHEM 204", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'GERM101' : {title: "The course name", code: "GERM 101", shortDescription: "Short description for GERM 101", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'PSYC200' : {title: "The course name", code: "PSYC 200", shortDescription: "Short description for PSYC 200", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'ASIA340' : {title: "The course name", code: "ASIA 340", shortDescription: "Short description for ASIA 340", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'PSYC102' : {title: "The course name", code: "PSYC 102", shortDescription: "Short description for PSYC 102", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'CPSC344' : {title: "The course name", code: "CPSC 344", shortDescription: "Short description for CPSC 344", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'ENGL112' : {title: "The course name", code: "ENGL 112", shortDescription: "Short description for ENGL 112", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'ARTH160' : {title: "The course name", code: "ARTH 160", shortDescription: "Short description for ARTH 160", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'ANTH302' : {title: "The course name", code: "ANTH 302", shortDescription: "Short description for ANTH 302", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'ENGL300' : {title: "The course name", code: "ENGL 300", shortDescription: "Short description for ENGL 300", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'CPSC110' : {title: "The course name", code: "CPSC 110", shortDescription: "Short description for CPSC 110", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'PHYS230' : {title: "The course name", code: "PHYS 230", shortDescription: "Short description for PHYS 230", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'FREN100' : {title: "The course name", code: "FREN 100", shortDescription: "Short description for FREN 100", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'SPAN220' : {title: "The course name", code: "SPAN 220", shortDescription: "Short description for SPAN 220", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'MEDI420' : {title: "The course name", code: "MEDI 420", shortDescription: "Short description for MEDI 420", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."},
	'PHIL114' : {title: "The course name", code: "PHIL 114", shortDescription: "Short description for PHIL 114", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lectus eget nisl pretium ultricies. Etiam pulvinar elit tellus, sit amet gravida ligula sagittis vitae. Vivamus condimentum lacus eu bibendum convallis."}
};


var featuredQ =    ['CPSC310', 'MATH100', 'CHEM204', 'GERM101', 'PSYC200', 'ASIA340', 'PSYC102'];
var recommenedQ1 = ['CPSC344', 'ENGL112', 'ARTH160', 'ANTH302', 'ENGL300', 'CPSC110', 'PHYS230'];
var recommenedQ2 = ['ASIA340', 'ENGL112', 'ANTH302', 'FREN100', 'SPAN220', 'MEDI420', 'PHIL114'];
var popularQ =     ['MATH100', 'ASIA340', 'CPSC344', 'CPSC110', 'PHYS230', 'MEDI420', 'PHIL114'];

var currQ = featuredQ;
var currIndex = 0;

var NUM_COURSES_BESIDE = 2;

function renderQueue(key) {
	var $queue = $(".tf-queue-window");
	var $courseSlide = $queue.find(".main-course-option");
	var course = courseMap[key];

	$(".course-side").hide();
	$(".details-link").hide();
	$(".course-side-front").show();

	$courseSlide.find(".course-code").html(course.code);
	$courseSlide.find(".course-title").html(course.title);
	$courseSlide.find(".course-short-description").html(course.shortDescription);
	$courseSlide.find(".course-description").html(course.description);

	var courseIndexes = [];
	var tmpIndex;
	var index = 0;
	
	for (var i = NUM_COURSES_BESIDE; i > 0; i--) {
		tmpIndex = currIndex - i;
		courseIndexes[index] = tmpIndex < 0 ? currQ.length + tmpIndex : tmpIndex;
		index++;
	}	
	
	for (var i = 1; i <= NUM_COURSES_BESIDE; i++) {
		tmpIndex = currIndex + i;
		courseIndexes[index] = tmpIndex >= currQ.length ? tmpIndex - currQ.length : tmpIndex; 
		index++;
	}	
	
	var $courseOptions = $queue.find(".next-course-option");
	for (var i = 0; i < $courseOptions.length; i++) {
		var courseKey = currQ[courseIndexes[i]];
		$($courseOptions[i]).find(".next-course-option-code").html(courseMap[courseKey].code);
		$($courseOptions[i]).attr("course-key", courseKey);
	}	
};

$(window).load(function() {		
 	renderQueue(currQ[currIndex]);
	
	$(".details-link").click(function(e) {
		$(".course-side").toggle();
		$(".details-link").toggle();
	});	
 
	$(".next-course-option").click(function(e) {
		var courseKey = $(e.target).attr("course-key");
		currIndex = currQ.indexOf(courseKey);
		renderQueue(courseKey);
	});

	$(".queue-nav-left").click(function(e) {
		currIndex--;
		if(currIndex < 0) {
			currIndex = currQ.length - 1;
		}
		renderQueue(currQ[currIndex]);
	});

	$(".queue-nav-right").click(function(e) {
		currIndex++;
		if(currIndex >= currQ.length) {
			currIndex = 0;
		}
		renderQueue(currQ[currIndex]);
	});

	$(".queue-header-option").click(function(e) {		
		$(".queue-header-option").removeClass("selected");
		var $headerOption = $(e.target);
		$headerOption.addClass("selected");
		var queue = $headerOption.attr("target-queue");
		switch(queue) {
			case "recommended":
				currQ = recommenedQ1;				
				break;
			case "featured":
				currQ = featuredQ;
				break;
			case "popular":
				currQ = popularQ;
				break;
		}
		
		renderQueue(currQ[0]);

		$(".tf-queue-footer").toggle(queue == "recommended");
	});
});