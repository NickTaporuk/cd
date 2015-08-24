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

        dlg  = new DialogFx( somedialog ,{},true);

	dlgtrigger.addEventListener( 'click', dlg.open.bind(dlg) );
	//dlgtrigger.addEventListener( 'click', dlg.close.bind(dlg) );
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
/*	var checkerInput = $('input[name="color-checker"]');
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
	});*/
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
    //color css
    pre_order.cardColor = {
        "blue"  :   {
            "background-image": "linear-gradient(0deg,#00308f 0,#5d89e1 100%)"
        },
        "silver":   {
            "background-image": "none",
            "background-color": "rgb(209, 209, 209)"
        },
        "brown" :   {
            "background-image": "none",
            "background-color": "rgb(79, 45, 18)"
        },
        "black" :   {
            "background-image": "none",
            "background-color": "rgb(15, 15, 15)"
        }
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
	//
	pre_order.successPopup = ['#orderSuccess','.success-message__overlay','.success-message__contenet'];

    pre_order.init = function() {

    };
    /** **/
    pre_order.setColor = function(name){
        $(name).on('click',function(){
            pre_order.color.default = $(this).attr('value');
            //console.log('pre_order.color.default:',pre_order.color.default);
        });
    };

    /** **/
    pre_order.setMinusCount = function(name,insert,dialog__total_sum){
        $(name).on('click',function(){
            if(pre_order.count > 1){
                pre_order.count-=1;
                $(insert).val(pre_order.count);
                //console.log('pre_order.count Minus:',pre_order.count);
                $(dialog__total_sum).html(pre_order.getQuantity(pre_order.price,pre_order.count));

            } else {/** events**/}
        });
    };

    /** **/
    pre_order.setPlusCount = function(name,insert,dialog__total_sum) {
        $(name).on('click',function(){
            pre_order.count+=1;
            $(insert).val(pre_order.count);
            //console.log('pre_order.count Plus:',pre_order.count);
            $(dialog__total_sum).html(pre_order.getQuantity(pre_order.price,pre_order.count));
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
        return a*b ;
    };

    /** **/
    pre_order.selectColorPopupEvent = function(color,formColor,parentEl,formColorBind,parentElBind,customCard){
        // set click color popup
        this.setColor(color);
        $(formColor+' '+parentEl).on('click',function() {

            $(parentEl).removeClass('selected');
            $(this).addClass('selected');

            //binding color landing
            /**
             * sorry guru javascript :)
             **/
            if(!!formColorBind && !!parentElBind && !!customCard) {
                pre_order.initColor(pre_order.color.default,formColorBind,parentElBind,customCard);
            } else if(!!customCard) {
                pre_order.initColor(pre_order.color.default,false,false,customCard);
            }
        });
    };

    /** **/
    pre_order.initColor = function(color,formColor,parentEl,customCard) {

        if(!!formColor && !!parentEl && !!customCard) {
            $(parentEl).removeClass('selected');
            $(formColor).find('.' + color).closest(parentEl).addClass('selected');
            $(customCard).css(pre_order.cardColor[color]);
            console.log(pre_order.cardColor[color]);
        } else if(!!customCard) {
            $(customCard).css(pre_order.cardColor[color]);
        } else {
            $(formColor).find('.' + color).closest(parentEl).addClass('selected');
        }
    };

    /**
     *
     * **/
    pre_order.resetData = function(){

    };
    /** **/
    pre_order.submitPreOrder = function(name,formName,formEmail,formId){
        $(name).on('click',function(e){
            e.preventDefault();
			e.stopPropagation();
            var nameFrm = $(formName),
                emailFrm = $(formEmail),
                formUrl = $(formId).prop('action'),
                formMethod = $(formId).prop('method');

            //console.log('emailFrm:',validate.rgxEmail(emailFrm.val()));
            if(validate.rgxEmail(emailFrm.val())){
                validate.errorNotVisible(emailFrm);
            } else {
                validate.errorVisible(emailFrm);
            }

            //validate email
            //console.log('nameFrm:',validate.rgxText(nameFrm.val()));
            if(validate.rgxText(nameFrm.val())){
                validate.errorNotVisible(nameFrm);
            } else {
                validate.errorVisible(nameFrm);
            }

            if(validate.rgxText(nameFrm.val()) && validate.rgxEmail(emailFrm.val())){
                var formData = {
                    "color": pre_order.color.default,
                    "count": pre_order.count,
                    "name" : nameFrm.val(),
                    "email": emailFrm.val(),
                    "action": 'addNewPreOrder' // wp ajax variable
                };

                //$('[data-dialog--close]').trigger('click');
                //console.log('formUrl:',formUrl,' || formMethod:',formMethod,' || formData:',formData);
                //Отправляем данные на сервер для проверки
                $.ajax({
                    url: formUrl,
                    type: formMethod,
                    data: formData,
                    success:function(data){
                        var data = JSON.parse(data);

                        if(data.response == '1') {
                            console.log('data2',data);

							succesPopup.open('#orderSuccess','.success-message__overlay','.success-message__contenet');

							// init popup object add close event listener
							var dlgtrigger = document.querySelector( '[data-dialog]' ),
								somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
								dlg = new DialogFx( somedialog,{},true );

							dlg.close(dlg);

							//
							//succesPopup.open.apply(null,pre_order.successPopup);

                        }

                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        //alert(xhr.status);
                        //alert(thrownError);
                        //alert("Error");
                        //console.log("Error");
                        //console.log(xhr);
                    }

                });
            }
        });
    };

    //debug
    //pre_order.quantity = 12214;
    //pre_order.price = 12214;
    //console.debug('pre_order.quantity:',pre_order.quantity);
    //console.debug('pre_order.total:',pre_order.total);
    console.debug(pre_order.setColor('[name="color-checker"]'));
    console.debug(pre_order.initColor(pre_order.color.default,'#pre_order__color','.bewel-item'));
    console.debug(pre_order.setMinusCount('.btn-minus','.input-number','#dialog__total-sum'));
    console.debug(pre_order.setPlusCount('.btn-plus','.input-number','#dialog__total-sum'));
    console.debug(pre_order.openPopupEvent('.btn-pre-order','#color-checkers__form','.dialog__bewel-item','.count-multiply__input','#count_price__int','#dialog__total-sum'));
    console.debug(pre_order.selectColorPopupEvent('[name="dialog__color-checker"]','#color-checkers__form','.dialog__bewel-item','#pre_order__color','.bewel-item','.custom-card'));
    console.debug(pre_order.selectColorPopupEvent('[name="color-checker"]','#pre_order__color','.bewel-item',false,false,'.custom-card'));
    console.debug(pre_order.submitPreOrder('.dialog__submit','#pre-order__name','#pre-order__email','#pre-order__data'));
    //==================================================================================
    //      Pre_order form END
    //==================================================================================


    //==================================================================================
    //      Validator form START
    //==================================================================================
    var validate = validate || {};
    validate.regularText    = /^[a-zA-Z]+$/;
    validate.regularEmail   = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    //
    validate.rgxText = function(str) {
        return (str.length>0) ? validate.regularText.test(str) : false;
    };
    //
    validate.rgxEmail = function(str) {
        //console.log('str.length:',str.length,'--:validate.regularEmail.test(str)',validate.regularEmail.test(str));
        return (str.length > 0) ? validate.regularEmail.test(str) : false;
    };

    validate.errorVisible = function (cls,textErrorClass,cssErrorClass) {
        cls.addClass('error');
        if(!!textErrorClass){
            $(textErrorClass).css(cssErrorClass);
        }
    };

    validate.errorNotVisible = function (cls,textErrorClass,cssErrorClass) {
        cls.removeClass('error');
        if(!!textErrorClass){
            $(textErrorClass).css(cssErrorClass);
        }
    };
    //==================================================================================
    //      Validator form END
    //==================================================================================

    //==================================================================================
    //      Notefy Me form START
    //==================================================================================
        var notify_form = notify_form || {};
        notify_form.email           = '';
        notify_form.emailId      = '#soon_input';
        notify_form.subminBtnName   = '.sign-up__btn';
        notify_form.formId          = '#notify-me__form';
        notify_form.errorInputId    = '#sign-up__messageExist';
        notify_form.errorCssVisible    = {"display":"block"};
        notify_form.errorCssNotVisible = {"display":"none"};
        notify_form.checkEmailDb    = false ;
        notify_form.notifySuccessIdPopup = "#notifySuccess";
        notify_form.notifySuccessOverlayPopup    = ".success-message__overlay";
        notify_form.notifySuccessContentPopup    = ".success-message__contenet";
        /**
         * init functional
         * **/
        notify_form.init = function(){
            notify_form.setEmail(notify_form.subminBtnName,notify_form.emailId,notify_form.formId);
        };

        /** **/
        notify_form.setEmail = function(clk,email,formId){

            var formUrl = $(formId).prop('action'),
                formMethod = $(formId).prop('method');

            $(clk).on('click',function(e) {
                e.preventDefault();
                e.stopPropagation();
                var mail = $(email);
                //validation
                if(validate.rgxEmail(mail.val())) {
                    validate.errorNotVisible(mail);
                    var formData = {
                        "email" : mail.val(),
                        "action": 'chackEmail'
                    };
                    //check whether there is a letter in the database
                    //Отправляем данные на сервер для проверки
                    $.ajax({
                        url:    formUrl,
                        type:   formMethod,
                        data:   formData,
                        async: false,
                        success:function(data){
                            var data = JSON.parse(data);
                            if(!!data.response) {
                                notify_form.checkEmailDb = data.response;
                                validate.errorVisible($(notify_form.emailId),notify_form.errorInputId,notify_form.errorCssVisible)
                            } else {
                                notify_form.checkEmailDb = false ;
                                validate.errorNotVisible($(notify_form.emailId),notify_form.errorInputId,notify_form.errorCssNotVisible);
                                succesPopup.open(notify_form.notifySuccessIdPopup,notify_form.notifySuccessOverlayPopup,notify_form.notifySuccessContentPopup);
                                $(notify_form.emailId).val('');
                            }

                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log("Error notify ajax request");
                            console.log(xhr);
                        }

                    });

                } else {
                    validate.errorVisible(mail);
                }
                //if ok ajax
                //else error
            });

            return false;
        };

        /** **/
        notify_form.init();

    //debug Notefy Me
    //console.debug(notify_form.setEmail(notify_form.subminBtnName,notify_form.emailId));
    //==================================================================================
    //      Notefy Me form END
    //==================================================================================

	//==================================================================================
	//      Sucess Popup form START
	//==================================================================================
		var succesPopup = succesPopup || {};
		succesPopup.opacityVisible	= {"opacity":1 , "display": "block"};
		succesPopup.opacityHidden	= {"opacity":0};
		/**
		 * open
		 *
		 * @name 			-
		 * @overlayVisible	-
		 * @contentVisible	-
		 * **/
		succesPopup.open = function(name,overlayVisible,contentVisible,timeout){
			//console.log('name:',name);
			//console.log('overlayVisible:',overlayVisible);
			//console.log('contentVisible:',contentVisible);

			if(!timeout) {
				timeout = 2000 ;
			}
			//console.log('timeout:',timeout);
			//console.log('succesPopup.opacityVisible:',succesPopup.opacityVisible);
			//console.log('$(name overlayVisible):',$(name +' '+ overlayVisible));
			$(name +' '+ overlayVisible).css(succesPopup.opacityVisible);
			$(name +' '+ contentVisible).css(succesPopup.opacityVisible);

			setTimeout(function(){
                succesPopup.close(name,overlayVisible,contentVisible)
            },timeout);
			//setTimeout("alert('Привет')",timeout);
		};

		/**
		 * close
		 *
		 * @name 			-
		 * @overlayHidden	-
		 * @contentHidden	-
		 * **/
		succesPopup.close = function(name,overlayHidden,contentHidden){
			//$(name +' '+ overlayHidden).css(succesPopup.opacityHidden);
			//$(name +' '+ contentHidden).css(succesPopup.opacityHidden);

            $(name +' '+ overlayHidden).fadeOut("slow");
			$(name +' '+ contentHidden).fadeOut("slow");
		};
	//==================================================================================
	//      Sucess Popup form END
	//==================================================================================