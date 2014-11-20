function assignGradesDist() {
	var index = Math.floor(Math.random() * 3)
	//$(".grades-dist").css("background-image", 'url("' + distributionImages[index] + '")');
	return distributionImages[index];
}

var questionnaireTopics = [
	"Computer Science", "Psychology", "Math", "Physics", "English", "Anthropology", "Media Arts", "Cooking", "Wine Tasting", "Biology"
];

var courseMap = {
	'CPSC310' : {title: "Introduction to Software Engineering", code: "CPSC 310", credits: 4, shortDescription: "Specification, design, implementation and maintenance of large, multi-module software systems. ", description: "Specification, design, implementation and maintenance of large, multi-module software systems. Principles, techniques, methodologies and tools for computer aided software engineering (CASE); human-computer interfaces, reactive systems, hardware-software interfaces and distributed applications.", gradeDist: "images/distribution1.png"},
	'MATH100' : {title: "Differential Calculus with Applications to Physical Sciences and Engineering", code: "MATH 100", credits: 3, shortDescription: "Derivatives of elementary functions. Applications and modeling: graphing, optimization. ", description: "Derivatives of elementary functions. Applications and modeling: graphing, optimization. Consult the Faculty of Science Credit Exclusion List: www.students.ubc.ca/calendar/index.cfm?tree=12,215,410,414.", gradeDist: "images/distribution1.png"},
	'CHEM201' : {title: "Introduction to Physical Chemistry", code: "CHEM 201", credits: 3, shortDescription: "Principles of chemical kinetics, reaction mechanisms and chemical thermodynamics.", description: "Principles of chemical kinetics, reaction mechanisms and chemical thermodynamics. Credit will be given for only one of CHEM 201 and 205.", gradeDist: "images/distribution1.png"},
	'GERM100' : {title: "Beginners' German I", code: "GERM 100", credits: 4, shortDescription: "Introduction to the language. Ability to communicate accurately in a variety of everyday situations.", description: "Introduction to the language. Ability to communicate accurately in a variety of everyday situations. See also GERM 433.", gradeDist: "images/distribution1.png"},
	'PSYC331' : {title: "Forensic Psychology", code: "PSYC 331", credits: 4, shortDescription: "The application of psychological theory and research to legal issues and the criminal justice system.", description: "The application of psychological theory and research to legal issues and the criminal justice system. Credit will not be granted for both PSYC 331 and PSYC 430.", gradeDist: "images/distribution1.png"},
	'ASIA305' : {title: "Asian Horror Cinema: National Nightmares and Specters of Trauma", code: "ASIA 305", credits: 4, shortDescription: "Engaging with the ideologies, industrial histories, socio-cultural contexts, and aesthetics of horror films - and the genre itself - from various Asian cinemas.", description: "Engaging with the ideologies, industrial histories, socio-cultural contexts, and aesthetics of horror films - and the genre itself - from various Asian cinemas.", gradeDist: "images/distribution2.png"},
	'PSYC102' : {title: "Introduction to Developmental, Social, Personality, and Clinical Psychology", code: "PSYC 102", credits: 3, shortDescription: "Introduction to methods and statistics, motivation, assessment, developmental, personality, clinical, and social psychology.", description: "Introduction to methods and statistics, motivation, assessment, developmental, personality, clinical, and social psychology. Credit will not be given for both PSYC 100 and PSYC 102.", gradeDist: "images/distribution2.png"},
	'CPSC344' : {title: "Introduction to Human Computer Interaction Methods", code: "CPSC 344", credits: 4, shortDescription: "Basic tools and techniques, teaching a systematic approach to interface design, task analysis, analytic and empirical evaluation methods.", description: "Basic tools and techniques, teaching a systematic approach to interface design, task analysis, analytic and empirical evaluation methods.", gradeDist: "images/distribution2.png"},
	'ENGL112' : {title: "Strategies for University Writing", code: "ENGL 112", credits: 3, shortDescription: "Study and practice of the principles of university-level discourse, with multidisciplinary readings and emphasis on processes of research-based writing.", description: "Study and practice of the principles of university-level discourse, with multidisciplinary readings and emphasis on processes of research-based writing. Essays are required.", gradeDist: "images/distribution2.png"},
	'ARTH160' : {title: "Art in Europe to the Sixteenth Century", code: "ARTH 160", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ANTH302' : {title: "Anthropology of Media", code: "ANTH 302", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ASIA354' : {title: "History of the Indian Ocean World", code: "ASIA 354", credits: 2, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'CPSC110' : {title: "Computation, Programs, and Programming", code: "CPSC 110", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'PHYS230' : {title: "Introduction to General Relativity", code: "PHYS 230", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'FRE460'  : {title: "Economics of Food Consumption", code: "FRE 460", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'SPAN220' : {title: "Introduction to the Analysis of Hispanic Cultural Texts", code: "SPAN 220", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'JAPN101' : {title: "Beginning Japanese I", code: "JAPN 101", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'PHIL114' : {title: "Minds and Machines", code: "PHIL 114", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "", gradeDist: "images/distribution3.png"}

};

var popularQ =      ['CPSC310', 'MATH100', 'CHEM201', 'GERM100', 'SPAN220', 'JAPN101', 'PSYC102'];
var recommendedQ =  ['CPSC344', 'ENGL112', 'ARTH160', 'ANTH302', 'ASIA354', 'CPSC110', 'PHYS230'];
var featuredQ =     ['ASIA354', 'ANTH302', 'CPSC344', 'ASIA305', 'FRE460', 'JAPN101', 'PHIL114'];

var wishlist = [];

var currQ = featuredQ;
var currIndex = 0;
var currQuestion = 0;

var answered = false;
var NUM_COURSES_LOOP = 5;

var distributionImages = ["images/distribution1.png", "images/distribution2.png", "images/distribution3.png"];


function renderQueue(index) {
	currIndex = index; 

	var $queue = $(".tf-queue-window");
	var $courseSlide = $queue.find(".main-course-option");
	var $courseOptions = $queue.find(".next-course-option");
	
	$courseOptions.css("visibility", "hidden");
	$courseSlide.css("visibility", "hidden");
	$courseSlide.find(".yes-icon").css("visibility", "hidden");
	
	if (currQ.length > 0) {
		var course = courseMap[currQ[index]];

		$(".course-side").hide();
		$(".details-link").hide();
		$(".no-courses-msg").hide();
		$(".course-side-front").show();
		$courseSlide.css("visibility", "visible");

		$courseSlide.find(".course-code").html(course.code);
		$courseSlide.find(".course-title").html(course.title);
		$courseSlide.find(".course-short-description").html(course.shortDescription);
		$courseSlide.find(".course-description").html(course.description);
		$courseSlide.find(".course-credits").html(course.credits);
		$courseSlide.attr("course-key", currQ[index]);

		$courseSlide.find(".grades-dist").css("background-image", 'url("' + course.gradeDist + '")')
		
		var isInWishlist = wishlist.indexOf(currQ[index]) != -1;
		$courseSlide.find(".yes-icon.tf-icon-button").css("visibility", isInWishlist ? "hidden" : "visible");

		updateMoreInfoLink(course);

		var tmpIndex;
		var courseKey;

		for (var i = 1; i < 3; i++) {
			tmpIndex = index - i;
			if (currQ.length >= NUM_COURSES_LOOP && tmpIndex < 0) {
				tmpIndex = currQ.length + tmpIndex;
			}
			if (tmpIndex >= 0) {
				courseKey = currQ[tmpIndex];
				$($courseOptions[2 - i]).find(".next-course-option-code").html(courseMap[courseKey].code);
				$($courseOptions[2 - i]).attr("course-key", courseKey);
				$($courseOptions[2 - i]).css("visibility", "visible");
			}			
		}

		for (var i = 1; i < 3; i++) {
			tmpIndex = index + i;
			if (currQ.length >= NUM_COURSES_LOOP && tmpIndex >= currQ.length) {
				tmpIndex = tmpIndex - currQ.length;
			}
			if (tmpIndex < currQ.length) {
				courseKey = currQ[tmpIndex];
				$($courseOptions[1 + i]).find(".next-course-option-code").html(courseMap[courseKey].code);
				$($courseOptions[1 + i]).attr("course-key", courseKey);
				$($courseOptions[1 + i]).css("visibility", "visible");
			}
		}

	} else {		
		$(".no-courses-msg").show();
	}
};

function centerQuestionnaireModal() {
	var $modal = $("#tf-modal-questionnaire").find(".tf-modal-content");
	$modal.css("margin-left", window.innerWidth / 2 - $modal.width() / 2);
	$modal.css("margin-top", window.innerHeight / 2 - $modal.height() / 2);
};

function calculateRecommendations() {
	var index;
	var queue = [];
	var courses = $.map(courseMap, function(value, index) {
	    return [index];
	});

	for (var i = 0; i < 7; i++) {
		index = Math.floor((Math.random() * courses.length));
		queue[i] = courses[index];
		courses.splice(index, 1);
	}

	return queue;
};

function updateMoreInfoLink(course) {
	var $link = $(".main-course-option").find(".details-button");
	var href = "course_page.html?";
	href += "title=" + course.code + " " + course.title + "&"
	      + "description=" + course.description + "&"
	      + "credits=" + course.credits;
	$link.attr("href", href);
};	

window.onresize = function(e) {
	centerQuestionnaireModal();
};

$(window).load(function() {		
 	renderQueue(currIndex);
	
	$(".details-link").click(function(e) {
		$(".course-side").toggle();
		$(".details-link").toggle();
	});	
 
	$(".next-course-option").click(function(e) {
		var courseKey = $(e.target).attr("course-key");
		if (!courseKey) { // may have clicked on elements within it, if so, propageate up
			courseKey = $(e.target).closest(".next-course-option").attr("course-key");
		}				
		renderQueue(currQ.indexOf(courseKey));
	});

	$(".queue-nav-left").click(function(e) {
		if(currIndex <= 0) {
			if (currQ.length >= NUM_COURSES_LOOP) {
				currIndex = currQ.length - 1;
			} else {
				currIndex = 0;
			}
		} else {
			currIndex--;
		}
		
		renderQueue(currIndex);
	});

	$(".queue-nav-right").click(function(e) {				
		if(currIndex >= currQ.length - 1) {
			if (currQ.length >= NUM_COURSES_LOOP) {
				currIndex = 0;
			} else {
				currIndex = currQ.length - 1;
			}
		} else {
			currIndex++;
		}
		renderQueue(currIndex);
	});

	$(".queue-header-option").click(function(e) {		
		$(".queue-header-option").removeClass("selected");
		var $headerOption = $(e.target);
		$headerOption.addClass("selected");
		var queue = $headerOption.attr("target-queue");
		switch(queue) {
			case "recommended":
				currQ = recommendedQ;				
				break;
			case "featured":
				currQ = featuredQ;
				break;
			case "popular":
				currQ = popularQ;
				break;
			case "wishlist":
				currQ = wishlist;				
				break;
		}		
		
		renderQueue(0);
				
		$(".tf-queue-footer").toggle(queue == "recommended");
	});

	$(".questionnaire-button").click(function(e) {
		centerQuestionnaireModal();
		var $modal = $("#tf-modal-questionnaire");
		$modal.find(".questionnaire-welcome").show();
		$modal.find(".questionnaire-question-slide").hide();
		$modal.show();		
	});

	$(".close-questionnaire-modal").click(function(e) {
		if (answered) {
			recommended = calculateRecommendations();
			currQ = recommended;
			renderQueue(0);
			answered = false;
		}
		var $modal = $("#tf-modal-questionnaire");
		$modal.find("input[type=radio]").prop("checked", false);
		$modal.hide();
	});

	$(".questionnaire-next-button").click(function(e) {
		var $modal = $("#tf-modal-questionnaire");
		var $slide = $modal.find(".questionnaire-question-slide");		
		
		$modal.find(".questionnaire-welcome").hide();
		
		if ($slide.find("input[type=radio]:checked").length > 0) {
			questionnaireTopics.splice(currQuestion, 1);
			answered = true;
		} else {
			currQuestion++;
		}

		if (currQuestion >= questionnaireTopics.length) {
			currQuestion = 0;
		}

		var topic = questionnaireTopics[currQuestion];

		if (topic != null) {
			$slide.find(".question-topic").html(topic);
			$slide.find("input[type=radio]").prop("checked", false);
		} else {
			$slide.html("<b>Yay</b>! There are no more questions for you!");			
		}
		
		$slide.show();
	});	

	$(".no-icon.tf-icon-button").click(function(e) {
		var courseKey = $(e.target).closest(".main-course-option").attr("course-key");
		if (window.confirm("Are you sure you want to remove " + courseMap[courseKey].code + " from your queue?")) {
			var index = currQ.indexOf(courseKey);
			currQ.splice(index, 1);	
			if (index >= currQ.length)
				index = currQ.length - 1;
			renderQueue(index);
		}
	});

	$(".yes-icon.tf-icon-button").click(function(e) {
		var courseKey = $(e.target).closest(".main-course-option").attr("course-key");
		if (wishlist.indexOf(courseKey) < 0) {
			wishlist.push(courseKey);
			$(this).css("visibility", "hidden");
			$(".added").fadeIn( "slow", function() {
		    $(this).fadeOut("slow");
		  });
		}
	});
});