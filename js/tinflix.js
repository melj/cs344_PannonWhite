function assignGradesDist() {
	var index = Math.floor(Math.random() * 3)
	//$(".grades-dist").css("background-image", 'url("' + distributionImages[index] + '")');
	return distributionImages[index];
}

var questionnaireTopics = [
	"Computer Science", "Psychology", "Math", "Physics", "English", "Anthropology", "Media Arts", "Cooking", "Wine Tasting", "Biology"
];

var courseMap = {
	'CPSC310' : {title: "Introduction to Software Engineering", code: "CPSC 310", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution1.png"},
	'MATH100' : {title: "Differential Calculus with Applications to Physical Sciences and Engineering", code: "MATH 100", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution1.png"},
	'CHEM201' : {title: "Introduction to Physical Chemistry", code: "CHEM 201", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution1.png"},
	'GERM101' : {title: "Beginners' German I", code: "GERM 101", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution1.png"},
	'PSYC200' : {title: "Forensic Psychology", code: "PSYC 200", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution1.png"},
	'ASIA340' : {title: "Asian Horror Cinema: National Nightmares and Specters of Trauma", code: "ASIA 340", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'PSYC102' : {title: "Introduction to Developmental, Social, Personality, and Clinical Psychology", code: "PSYC 102", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'CPSC344' : {title: "Introduction to Human Computer Interaction Methods", code: "CPSC 344", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ENGL112' : {title: "Strategies for University Writing", code: "ENGL 112", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ARTH160' : {title: "Art in Europe to the Sixteenth Century", code: "ARTH 160", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ANTH302' : {title: "Anthropology of Media", code: "ANTH 302", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution2.png"},
	'ASIA354' : {title: "History of the Indian Ocean World", code: "ASIA 354", credits: 2, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'CPSC110' : {title: "Computation, Programs, and Programming", code: "CPSC 110", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'PHYS230' : {title: "Introduction to General Relativity", code: "PHYS 230", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'FRE460' :  {title: "Economics of Food Consumption", code: "FRE 460", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'SPAN220' : {title: "Introduction to the Analysis of Hispanic Cultural Texts", code: "SPAN 220", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'JAPN101' : {title: "Beginning Japanese I", code: "JAPN 101", credits: 4, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit. Cu mel adhuc soleat contentiones, animal iuvaret delectus ex ius. Ex vim vide delectus, reque elitr ornatus pro ei, has ex laoreet.", gradeDist: "images/distribution3.png"},
	'PHIL114' : {title: "Minds and Machines", code: "PHIL 114", credits: 3, shortDescription: "Lorem ipsum dolor sit amet, enim saepe vituperatoribus ne duo, ad pro probo consul. Est ad mandamus salutandi, simul doming eu eos, per ne amet graecis blandit.", description: "", gradeDist: "images/distribution3.png"}
};

var popularQ =      ['CPSC310', 'MATH100', 'CHEM201', 'GERM101', 'PSYC200', 'JAPN101', 'PSYC102'];
var recommendedQ =  ['CPSC344', 'ENGL112', 'ARTH160', 'ANTH302', 'ASIA354', 'CPSC110', 'PHYS230'];
var featuredQ =     ['ASIA354', 'ANTH302', 'CPSC344', 'ASIA340', 'FRE460', 'JAPN101', 'PHIL114'];

var wishlist = [];

var currQ = featuredQ;
var currIndex = 0;
var currQuestion = 0;

var answered = false;

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

		$courseSlide.find(".yes-icon").css("visibility", wishlist.indexOf(currQ[index]) == -1 ? "visible" : "hidden");

		var tmpIndex;
		var courseKey;

		tmpIndex = index - 2;
		if (tmpIndex >= 0) {
			courseKey = currQ[tmpIndex];
			$($courseOptions[0]).find(".next-course-option-code").html(courseMap[courseKey].code);
			$($courseOptions[0]).attr("course-key", courseKey);
			$($courseOptions[0]).css("visibility", "visible");
		}

		tmpIndex = index - 1;
		if (tmpIndex >= 0) {
			courseKey = currQ[tmpIndex];
			$($courseOptions[1]).find(".next-course-option-code").html(courseMap[courseKey].code);
			$($courseOptions[1]).attr("course-key", courseKey);
			$($courseOptions[1]).css("visibility", "visible");
		}

		tmpIndex = index + 1;
		if (tmpIndex < currQ.length) {
			courseKey = currQ[tmpIndex];
			$($courseOptions[2]).find(".next-course-option-code").html(courseMap[courseKey].code);
			$($courseOptions[2]).attr("course-key", courseKey);
			$($courseOptions[2]).css("visibility", "visible");
		}

		tmpIndex = index + 2;
		if (tmpIndex < currQ.length) {
			courseKey = currQ[tmpIndex];
			$($courseOptions[3]).find(".next-course-option-code").html(courseMap[courseKey].code);
			$($courseOptions[3]).attr("course-key", courseKey);
			$($courseOptions[3]).css("visibility", "visible");
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
		renderQueue(currQ.indexOf(courseKey));
	});

	$(".queue-nav-left").click(function(e) {
		if(currIndex > 0) {
			currIndex--;
		}
		renderQueue(currIndex);
	});

	$(".queue-nav-right").click(function(e) {		
		if(currIndex < currQ.length - 1) {
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
		wishlist.push(courseKey);
		$(this).css("visibility", "hidden");
	});
});