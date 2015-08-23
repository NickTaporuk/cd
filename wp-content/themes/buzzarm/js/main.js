;$(document).ready(function() {
// Initialize the text rotator
	// $(".rotate").rotator();

// Init wow 
	new WOW().init();

	//$('html').niceScroll();
/*$('body').flowtype();
$('body').flowtype({
    minimum   : 500,
    maximum   : 1200,
    minFont   : 12,
    maxFont   : 40,
    fontRatio : 30
});	*/

// Dialog
	var dlgtrigger = document.querySelector( '[data-dialog]' ),
		somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
		dlg = new DialogFx( somedialog );

	dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
// end Dialog

// Dialog Video
	var videoTrigger = document.querySelector( '[data-dialog-video]' ),
		videodialog = document.getElementById( videoTrigger.getAttribute( 'data-dialog-video' ) ),
		dlgvd = new DialogFx( videodialog );

	videoTrigger.addEventListener( 'click', dlgvd.toggle.bind(dlgvd) );
// end Dialog Video




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
	});
// end of Toggle Menu

// Toggle pin-socials
	var $pinToggle = $('#pin-toggle');

	$pinToggle.on('click', function(event) {
	  event.preventDefault();	
	  var $subMenu = $('#pin-socials').children('ul');
	  var $subMenuItem = $subMenu.children('li');
	  var $pinNav = $('.pin-nav');
	  if ( ! $subMenu.hasClass('on-view') ) {
	    $subMenu.addClass('on-view');
	    $subMenu.velocity('transition.slideRightIn', {
	      duration: 200
	    });
	    $subMenuItem.velocity('transition.slideRightIn', {
	      delay: 0,
	      duration: 300,
	      stagger: 100
	    });
	    $pinNav.addClass('active');
	    $pinNav.velocity('transition.slideRightIn', {
	      duration: 200
	    });
	  } else {
	    $subMenu
	    		.removeClass('on-view')
	    		.css('disply', 'none');
	    //$subMenu.add($subMenuItem).velocity('reverse');
	    $pinNav.removeClass('active');
	    $pinNav.velocity('transition.slideLeftIn', {
	      duration: 200
	    });
	    //$pinNav.velocity('reverse');
	  }
	});

	// Pin-opener 
	document.querySelector( "#pin-toggle" )
		.addEventListener( "click", function() {
	    	this.classList.toggle( "active" );
	});
// End Toggle pin-socials

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
		} 
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

	})(); 
// end Placeholder

// Launching Soon Validation
	

// Contact Us Validation

	// Light empty fields
    function lightEmpty() {
	  setTimeout(function() {

        $( "#contactForm" ).find('.error').each(function() {

		$(this).removeClass('error');

		})

      }, 1500);
    }

    // Form submit
    $( "#contactForm" ).submit(function(event) {
    	event.preventDefault();
		// Name 
		var nameField = $("#contactName");
		var nameVal = nameField.val();
		var rv_name = /^[a-zA-Z]+$/; // /^[а-яЄіїєІЇА-Я]+$/ - rus/ukr

		if(nameVal.length > 2 &&  nameVal != '' && rv_name.test(nameVal) && nameVal.length < 15 ) {

		} else { 
			$(".fname").addClass('error'); 
		}	

		// email
		var emailField = $("#contactEmail");
		var emailVal = emailField.val();
		var rv_name = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i; 

		if(emailVal.length > 2 && emailVal != '' && rv_name.test(emailVal) ) {

		} else { 
			$(".femail").addClass('error'); 
		}

		// Message
		var messageArea = $("#contactMessage");
		var messageVal = messageArea.val();

		if( messageVal != '' ) {

		} else { 
			$(".fmessage").addClass('error'); 
		}	

		lightEmpty();

	    var sizeEmpty = $( "#contactForm" ).find('.error').length;

	    
	    
		
		//console.log($(this));
		//Проверяем, не отправляется ли уже форма в текущий момент времени
		if($(this).data('formstatus') !== 'submitting'){
		//console.log("Error");
			//Устанавливаем переменные
			var form = $(this),
				formData = form.serialize(),
				formUrl = form.attr('action'),
				formMethod = form.attr('method'), 
				responseMsg = $('#signup-response');
			
			//Добавляем дату к форме
			form.data('formstatus','submitting');
			
			//Показываем соообщение с просьбой подождать
			responseMsg.hide()
					   .addClass('response-waiting')
					   //.text('Пожалуйста, подождите...')
					   .fadeIn(200);
			
			//Отправляем данные на сервер для проверки
			$.ajax({
				url: formUrl,
				type: formMethod,
				data: formData,
				success:function(data){
					//console.log("success");
					//Устанавливаем переменные
					var responseData = jQuery.parseJSON(data), 
						klass = '';
					
					//Состояния ответа
					switch(responseData.status){
						case 'error':
							klass = 'response-error';
						break;
						case 'success':
							klass = 'response-success';
						break;	
					}
					
					//Показываем сообщение ответа
					responseMsg.fadeOut(200,function(){
						$(this).removeClass('response-waiting')
							   .addClass(klass)
							   .text(responseData.message)
							   .fadeIn(200,function(){
								   //Устанавливаем таймаут для скрытия сообщения ответа
								   setTimeout(function(){
									   responseMsg.fadeOut(200,function(){
									       $(this).removeClass(klass);
										   form.data('formstatus','idle');
									   });
								   },3000)
								});
					});
				},
				error: function (xhr, ajaxOptions, thrownError) {
			        //alert(xhr.status);
			        //alert(thrownError);
			        alert("Error");
			        console.log("Error");
			        console.log(xhr);
      			}

			});
		}
		
		//Предотвращаем отправку формы
		// return false;
		
		// Conditional trigger for submit
	    if(sizeEmpty > 0) { return false } 
	    return true;
	}); // end submit

}); // end doc.ready

    //==================================================================================
    //      Pre_order form START
    //==================================================================================
    var pre_order = pre_order || {};
    //color
    pre_order = {"color":{"default":"blue"}};
    //
    pre_order.cardColor = {
        "blue"  :   {

        },
        "silver":   {},
        "brown" :   {},
        "black" :   {}
    };
    // name
    pre_order.name = '';
    //email
    pre_order.email = '';
    // количество карточек
    pre_order.count = 1;
    // количество карточек
    pre_order.price = 79;
    // price * count
    pre_order.total ;
    // количество карточек
    pre_order.quantity = pre_order.quantity || pre_order.price;

    pre_order.init = function(){

    };
    /** **/
    pre_order.setColor = function(name){
        $(name).on('click',function(){
            pre_order.color.default = $(this).attr('value');
            //console.log('pre_order.color.default:',pre_order.color.default);
        });
    };

    /** **/
    pre_order.setMinusCount = function(name,insert){
        $(name).on('click',function(){
            if(pre_order.count > 1){
                pre_order.count-=1;
                $(insert).val(pre_order.count);
                //console.log('pre_order.count Minus:',pre_order.count);

            } else {/** events**/}
        });
    };

    /** **/
    pre_order.setPlusCount = function(name,insert) {
        $(name).on('click',function(){
            pre_order.count+=1;
            $(insert).val(pre_order.count);
            //console.log('pre_order.count Plus:',pre_order.count);
        });
    };

    /** **/
    pre_order.openPopupEvent = function(popupNameButton,formColor,parentEl,countEl,count_price__int,dialog__total_sum){
        $(popupNameButton).on('click',function(){
            //select color
            //console.log('pre_order.color.default:');
            // init color
            $(parentEl).removeClass('selected');
            $(formColor+' .'+pre_order.color.default).closest(parentEl).addClass('selected');
            //init count
            $(countEl).val(pre_order.count);
            //init price
            $(count_price__int).html(pre_order.price);
            //init quantity
            $(dialog__total_sum).html(pre_order.getQuantity(pre_order.price,pre_order.count));
        });
    };

    /** **/
    pre_order.getQuantity = function(a,b) {
        return a*b
    };

    /** **/
    pre_order.selectColorPopupEvent = function(color,formColor,parentEl,formColorBind,parentElBind){
        // set click color popup
        //console.log('formColorBind:',formColorBind);
        //console.log('parentElBind:',parentElBind);
        //console.log('parentEl:',parentEl);
        //console.log('formColor+ +parentEl:',(formColor+' '+parentEl));
        this.setColor(color);
        $(formColor+' '+parentEl).on('click',function() {

            $(parentEl).removeClass('selected');
            $(this).addClass('selected');

            //binding color landing
            /**
             * sorry guru javascript :)
             **/
            if(!!formColorBind && !!parentElBind) {
                pre_order.initColor(pre_order.color.default,formColorBind,parentElBind);
                //console.log('formColorBind1:',formColorBind);
                //console.log('parentElBind11:',parentElBind);
                console.log('color:',pre_order.color.default);
            }
        });



    };

    /** **/
    pre_order.initColor = function(color,formColor,parentEl){
        $(parentEl).removeClass('selected');
        $(formColor).find('.'+color).closest(parentEl).addClass('selected');
    };
    //debug
    //pre_order.quantity = 12214;
    //pre_order.price = 12214;
    console.debug('pre_order.quantity:',pre_order.quantity);
    console.debug('pre_order.total:',pre_order.total);
    console.debug(pre_order.setColor('[name="color-checker"]'));
    console.debug(pre_order.initColor(pre_order.color.default,'#pre_order__color','.bewel-item'));
    console.debug(pre_order.setMinusCount('.btn-minus','.input-number'));
    console.debug(pre_order.setPlusCount('.btn-plus','.input-number'));
    console.debug(pre_order.openPopupEvent('.btn-pre-order','#color-checkers__form','.dialog__bewel-item','.count-multiply__input','#count_price__int','#dialog__total-sum'));
    console.debug(pre_order.selectColorPopupEvent('[name="dialog__color-checker"]','#color-checkers__form','.dialog__bewel-item','#pre_order__color','.bewel-item'));
    console.debug(pre_order.selectColorPopupEvent('[name="color-checker"]','#pre_order__color','.bewel-item'));
    //==================================================================================
    //      Pre_order form END
    //==================================================================================


    //==================================================================================
    //      Validator form START
    //==================================================================================

    //==================================================================================
    //      Validator form END
    //==================================================================================

    //==================================================================================
    //      Notefy Me form START
    //==================================================================================
        var notify_form = notify_form || {};
        notify_form.email = '';
        notify_form.emailClass = '#soon_input';
        notify_form.subminBtnName = '.sign-up__btn';
        notify_form.setEmail = function(clk,email){
            $(clk).on('click',function(e) {
                //console.log('$(email).val():', $(email).val());
            });
            return false;
        };
    //debug Notefy Me
    console.debug(notify_form.setEmail(notify_form.subminBtnName,notify_form.emailClass));
    //==================================================================================
    //      Notefy Me form END
    //==================================================================================

