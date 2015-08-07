$(document).ready(function() {
// Initialize the text rotator
	// $(".rotate").rotator();

// Init wow 
	new WOW().init();

// Init ScrollMagic Controller
	var scrollMagicController = new ScrollMagic.Controller();

// Toggle Menu
	var $menu = $('#nav-toggle');

	$menu.on('click', function(event) {
	  event.preventDefault();	
	  var $subMenu = $('#main-nav').children('ul');
	  var $subMenuItem = $subMenu.children('li');
	  if ( ! $subMenu.hasClass('on-view') ) {
	    $subMenu.addClass('on-view');
	    $subMenu.velocity('transition.slideRightBigIn', {
	      duration: 200
	    });
	    $subMenuItem.velocity('transition.slideRightBigIn', {
	      delay: 0,
	      duration: 300,
	      stagger: 100
	    }); 
	  } else {
	    $subMenu.removeClass('on-view');
	    $subMenu.add($subMenuItem).velocity('reverse');
	  }
	}); 

// Nav-opener
	document.querySelector( "#nav-toggle" )
		.addEventListener( "click", function() {
	    	this.classList.toggle( "active" );
	});// end of Toggle Menu

// PIN-NAVIGATION
	var sceneNavPin = new ScrollMagic.Scene({
		triggerElement: '#nav-pin-scene',
		offset: 500
	})
	.setPin("#pin-navigation")
	.setClassToggle("#pin-navigation", "active")
	//.addIndicators()
	.addTo(scrollMagicController);
// PIN-NAVIGATION -- END

// Scrolling Page (animated links)

// bind click event to all internal page anchors
    $("a[href*=#]").bind("click", function(e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr("href");
        // scroll to each target
        $(target).velocity("scroll", {
            duration: 500,
            offset: -40,
            easing: "ease-in-out"
        });
    }); // end of Scrolling Page 

// Parallax 
	/*$(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#main-section').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)' // parallax (20% scroll rate)
            //'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#about-section').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });*/ // end of parallax

// Sticky Menu
	/*var
		$stickyHeader = $('#main-nav, #sticky-order, #sticky-logo'),
		start_pos = $stickyHeader.offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop()>=start_pos) {
			if ($stickyHeader.hasClass()==false) $stickyHeader.addClass('to_top');
 		}
 		else $stickyHeader.removeClass('to_top'); 
 	});*/

// end of sticky menu

// Choose color
	var checkerInput = $('input[name="color-checker"]');
	var bewelItem = $('.bewel-item');
	var colorItem = $('.color-item');
	var blueItem = $('#blue-checked');
	var customCard = $('.custom-card');

	if (checkerInput.is(':checked') === false) {
		checkerInput.filter('[value="blue"]')
			.attr('checked', true)
			.parents().eq(1)
			.addClass('selected');
	}

	checkerInput.on('click', function() {
		if (checkerInput.is(':checked')) {
			bewelItem.removeClass('selected');

			var that = $(this);
			var currentColor = that.parent(colorItem).css('backgroundColor');
			
			that.parents().eq(1).addClass('selected');

			if (!blueItem.is(':checked')) {
				customCard.css('backgroundImage', 'none').css('backgroundColor', currentColor);
			} else {
				customCard.css('backgroundImage', '').css('backgroundColor', '');
			}
		} /*else {
			
		}*/
	});
// End Choose color	

// Placeholder
	(function() {
		'use strict'
		
		var iputItems = document.querySelectorAll('.holder-text');

		[].forEach.call(iputItems, function (el) {
		  var holderText = el.placeholder;	
		  el.addEventListener('focus', function(event) {
		  	event.preventDefault();
			this.placeholder = " ";
		  }, false); // focus

		  el.addEventListener('blur', function(event) {
		  	event.preventDefault();
			this.placeholder = holderText;
		  }, false); // blur
		});

	})(); // end Placeholder
		

// ScrollMagic

// ABOUT SECTION -- START

// Titles, icons 
	/*var tweenAboutTitle = new TimelineMax()
		.from('.heading', 0.6, {
			opacity: 0,
			y: 100
		})
		.from('.subheading', 0.6, {
			opacity: 0,
			y: 100
		});
	var tweenIcons = TweenMax.staggerFrom(".features-icon", 0.8, {
		scale:0.5, 
		opacity:0, 
		delay:0, 
		ease:Sine.easeInOut, 
		force3D:true 
	}, 0.2);*/

// Display card 
	var tweenCard = TweenMax.from('#animation', 1, {
		opacity: 0,
		scale: 0,
		//repeat:0,
		ease:Linear.easeOut
	}, 0.25);

// Wallet visible	
	var tweenWallet = TweenMax.to('#anim-wallet', 0.3, {
		opacity:1,
		delay: 0,
		y: -260
	});

	var timelineInto = new TweenMax
	.from('#md_card', 0.6, {
		opacity: 0,
		x: 100
	});
	/*.to('#anim-wallet', 0.6, {
		x:300,
		delay: 0.6
	})*/
	/*.from('#anim-order', 0.6, {
		opacity: 0,
		x: -100
	})*/

// Scenes

// Section heading
	/*var sceneHeading = new ScrollMagic.Scene({
		triggerElement: '#about_heading',
		offset: -480
	})
	.setTween(tweenAboutTitle)
	.addIndicators()
	.addTo(scrollMagicController);*/
// Icons
	/*var sceneIcons = new ScrollMagic.Scene({
		triggerElement: '#key_features',
		offset: -480
	})
	.setTween(tweenIcons)
	.addIndicators()
	.addTo(scrollMagicController);*/

// Card visible (1)
	var sceneOpacity = new ScrollMagic.Scene({
		triggerElement: '#scene-opacity',
		offset: -550
	})
	//.setClassToggle("#anim-icons", "active") // add class toggle
	.setTween(tweenCard)
	/*.setVelocity('#animation',
	    
	    { translateY: [ 0, 500 ] },
	    { duration: 1000 },
	    
	    {opacity: [ 0, "easeInSine", 1 ]}
	)*/
	//.addIndicators()
	.addTo(scrollMagicController);

// Display wallet  (2)
	/*var sceneWallet = new ScrollMagic.Scene({
		triggerElement: '#scene-wallet',
		offset: -100
	})
	
	.addIndicators()
	.addTo(scrollMagicController);*/

// Pinned features and wallet (3)
	var scenePinFeatures2 = new ScrollMagic.Scene({
		triggerElement: '#scene-pin-3',
		offset: 900,
		duration: 400
	})
	.setPin("#pin-wallet")
	.setTween(tweenWallet)
	//.addIndicators()
	.addTo(scrollMagicController);

// Card into wallet, wallet to the right, headings from the left (4)
	var sceneInto = new ScrollMagic.Scene({
		triggerElement: '#scene-into',
		offset: 500
	})
	.setTween(timelineInto)
	//.addIndicators()
	.addTo(scrollMagicController);

// ABOUT SECTION -- END


// HOW-IT-WORKS -- START
// Create Animation for Scenes

	/*var veloScroll = $("#scroll-to").velocity("scroll", { 
			container: $("#scroll-container"),
			duration: 800,
			delay: 500
	});*/
// Titles
	/*var tweenHowTitle = new TimelineMax()
	.from('.works-heading', 0.6, {
		opacity: 0,
		y: 100
	})
	.from('.works-subheading', 0.6, {
		opacity: 0,
		y: 100
	});*/
// Iphone first
	/*var tweenIphone = new TimelineMax()
	.from('#iphone_first', 0.6, {
		opacity: 0,
		x: -100
	})
	.from('#card_first', 0.6, {
		opacity: 0,
		x: -100
	})
	.from('#wallet_first', 0.6, {
		opacity: 0,
		x: -100
	});*/
// Steps
	/*var tweenSteps = new TweenMax.staggerFrom(".step", 0.8, {
		scale:0.5, 
		opacity:0, 
		delay:0, 
		ease:Sine.easeInOut
	}, 0.2);*/
// Touch
	var tlTouch = new TimelineMax()

	/*.to('#touch-into', 0.6, {
		y:70,
		delay: 0.5
	})*/
	.from('#arm-animate', 2, {
		opacity: 0,
		y: -400,
		x: 1000,
		delay: 0
	})
	.to('#arm-animate', 2, {
		y: 0
	});
	/*.to('#arm-animate', 0.6,  {
		y: 0
	})*/
	/*.from('#first-path', 0.1, {
		opacity: 0,
		x: -50
	})
	.from('#second-path', 0.2, {
		opacity: 0,
		x: -50
	})
	.from('#third-path', 0.3, {
		opacity: 0,
		x: -50
	});*/
	/*.from('#alert-txt', 0.6, {
		opacity: 0,
		x: 100
	});*/
// Card into wallet, arm down
	var twInto = new TweenMax.to
	('.touch-card', 0.6, {
		y: 100
	});
// arm down 
	var twDown = new TimelineMax()
	.to('#arm-animate', 0.5, {
		x: -95,
		y: 80
		//opacity: 0.5
	});
// arm opacity
	/*var twArmHide = new TweenMax.to
	('.arm', 0.5, {
		opacity: 0
	});*/
// touch arm
	/*var twTouch = new TimelineMax()
	.to('.arm', 0.6, {
		opacity: 0
	})
	.from('.arm.active', 0.6, {
		opacity: 0,
	});*/
	/*.from('#first-path', 0.1, {
		opacity: 0,
		x: -50
	})
	.from('#second-path', 0.2, {
		opacity: 0,
		x: -50
	})
	.from('#third-path', 0.3, {
		opacity: 0,
		x: -50
	});*/

// Scenes

	/*var sceneScroll = new ScrollMagic.Scene({
		triggerElement: '#scene-scroll',
		offset: 20
	})
	.setVelocity("#scroll-to", "scroll", {
		duration: 800, 
		delay: 200,
		easing: [ .42, 0, .58, 1 ]
	})	
	.addIndicators()
	.addTo(scrollMagicController);*/
// Headings
	/*var sceneHowHeadings = new ScrollMagic.Scene({
		triggerElement: '#how-it-works',
		offset: -350
	})
	.setTween(tweenHowTitle)
	.addIndicators()
	.addTo(scrollMagicController);*/
// Iphone first 
	/*var sceneIphone = new ScrollMagic.Scene({
		triggerElement: '#first_left',
		offset: -450
	})
	.setTween(tweenIphone)
	.addIndicators()
	.addTo(scrollMagicController);*/
// Steps
	/*var sceneSteps = new ScrollMagic.Scene({
		triggerElement: '#steps',
		offset: -450
	})
	.setTween(tweenSteps)
	.addIndicators()
	.addTo(scrollMagicController);*/
// Pin	
	/*var scenePin2 = new ScrollMagic.Scene({
		triggerElement: '#scene-pin2',
		offset: 0,
		duration: 920
	})
	.setPin("#el-1, #el-2")
	.addIndicators()
	.addTo(scrollMagicController);*/

// TOUCH ALERT with ARM
	var sceneTouch = new ScrollMagic.Scene({
		triggerElement: '#touch-animate',
		triggerHook: 'onEnter',
		duration: "100%",
		offset: -700
	})
	//.setClassToggle("#iphone-rotate", "active")
	//.setPin('#arm-animate')
	.setTween(tlTouch)
	//.addIndicators()
	.addTo(scrollMagicController);
// card into wallet 
	var sceneCardInto = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		duration: 150,
		offset: 100
	})
	.setPin('#touch-wrap')
	.setTween(twInto)
	//.addIndicators()
	.addTo(scrollMagicController);
// arm closer 
	var sceneChangeArm = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		duration: 150,
		offset: 250
	})
	//.setClassToggle('#arm-animate', 'active')
	.setPin('#touch-wrap')
	.setTween(twDown)
	//.addIndicators()
	.addTo(scrollMagicController);	
// change arm once
	var sceneChangeOnce = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		offset: 400
	})
	.setClassToggle('#arm-animate', 'active')
	//.setTween(twTouch)
	//.addIndicators()
	.addTo(scrollMagicController);
// change iphone once
	var sceneIphoneAlert = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		offset: 400
	})
	.setClassToggle('#iphone-alert', 'active')
	//.setTween()
	//.addIndicators()
	.addTo(scrollMagicController);
//
	var sceneChangeArm = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		duration: 150,
		offset: 400
	})
	.setPin('#touch-wrap')
	//.addIndicators()
	.addTo(scrollMagicController);

// HOW-IT-WORKS -- END


}); // end doc.ready


