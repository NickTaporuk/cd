;$(document).ready(function() {
// Init ScrollMagic Controller
	var scrollMagicController = new ScrollMagic.Controller();

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

// ScrollMagic

// ABOUT SECTION -- START

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

// Scenes

// Card visible (1)
	var sceneOpacity = new ScrollMagic.Scene({
		triggerElement: '#scene-opacity',
		offset: -550
	})
	.setTween(tweenCard)
	//.addIndicators()
	.addTo(scrollMagicController);

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
	//.setTween(timelineInto)
	//.addIndicators()
	.addTo(scrollMagicController);

// ABOUT SECTION -- END


// HOW-IT-WORKS -- START

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

// Scenes

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
// Card into Wallet Scene
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

// Arm Closer Scene
	var sceneArmCloser = new ScrollMagic.Scene({
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

// Change Arm 
	// define images
	var images = [
		"../img/arm/arm_1.png",
		"../img/arm/arm_2.png",
		"../img/arm/arm_3.png",
		"../img/arm/arm_4.png",
		"../img/arm/arm_5.png",
		"../img/arm/arm_6.png",
		"../img/arm/arm_7.png",
		"../img/arm/arm_8.png"
	];
	// use this object to cycle through the array
	var obj = {curImg: 0};
	// create tween
	var twArm = TweenMax.to(obj, 0.2,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#armImg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);
	// change arm scene
	var sceneChangeArm = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		duration: 100,
		offset: 400
	})
	//.setClassToggle('#arm-animate', 'active')
	.setPin('#touch-wrap')
	.setTween(twArm)
	//.addIndicators()
	.addTo(scrollMagicController);

// Change Iphone once
	var sceneIphoneAlert = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		offset: 500
	})
	.setClassToggle('.touch-alert', 'active')
	//.addIndicators()
	.addTo(scrollMagicController);
	
// animae alert
	var scenePinAlert = new ScrollMagic.Scene({
		triggerElement: '#touch-wrap',
		triggerHook: 'onLeave',
		duration: 150,
		offset: 500
	})
	//.setClassToggle('#alertSvg', 'active')
	.setPin('#touch-wrap')
	//.addIndicators()
	.addTo(scrollMagicController);

// HOW-IT-WORKS -- END

});// end ready