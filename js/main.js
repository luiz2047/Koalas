 $(document).ready(function () {
    $("#main").fullpage({
        menu: '#menu',
		lockAnchors: false,
		anchors:[],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '0',
		paddingBottom: '0',
		fixedElements: '#header',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });// 6,32 5,38 2,34
 	$("#circle1").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 55,
 		textSize: 24,
 		textStyle: 'font-size: 120px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 	$("#circle2").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 45,
 		textSize: 24,
 		textStyle: 'font-size: 12px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 	$("#circle3").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 60,
 		textSize: 24,
 		textStyle: 'font-size: 12px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 	$("#circle4").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 75,
 		textSize: 24,
 		textStyle: 'font-size: 12px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 	$("#circle5").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 60,
 		textSize: 24,
 		textStyle: 'font-size: 12px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 	$("#circle6").circliful({
 		animation: 1,
 		animationStep: 7,
 		foregroundBorderWidth: 12,
 		backgroundBorderWidth: 17,
 		percent: 65,
 		textSize: 24,
 		textStyle: 'font-size: 12px;',
 		textColor: '#666',
 		multiPercentage: 1,
 		percentages: [10, 20, 30]
 	});
 });
