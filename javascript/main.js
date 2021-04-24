$(function(){
	$('.header-mobile-btn').on('click', function(){
			$('.header-items').toggleClass('header-item--active');
		});
	$('.header-items').on('click', function(){
			$('.header-items').removeClass('header-item--active');
		});
	$(window).on('load', function(){
			$('.foot-btn-left').addClass('foot-btn-left--active');
		});

	$('.foot-btn-left').on('click', function(e){
		e.preventDefault();
			$('.foot-btn-left').addClass('foot-btn-left--active');
			$('.foot-btn-right').removeClass('foot-btn-right--active');
			$('.foot-card__title').removeClass('foot-card__title--block');
			$('.foot-card__active').removeClass('foot-card__active--active');
		});
	$('.foot-btn-right').on('click', function(e){
		e.preventDefault();
			$('.foot-btn-right').addClass('foot-btn-right--active');
			$('.foot-btn-left').removeClass('foot-btn-left--active');
			$('.foot-card__title').addClass('foot-card__title--block');
			$('.foot-card__active').addClass('foot-card__active--active');
		});

		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		  	
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1200:{
		            items:5
		        }

    		}
		})
	var btn = $('.botton');

		$(window).scroll(function() {
		  if ($(window).scrollTop() > 300) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});
		btn.on('click', function(e) {
			  e.preventDefault();
			  $('html, body').animate({scrollTop:0}, '300');
			});	
		$("a.scrollto").click(function() {
		    var elementClick = $(this).attr("href")
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 800);
		    return false;
		  });
		$("a.log-login").click(function(e) {
			e.preventDefault();
			var destinationPopup = $(this).attr("href");
			$(destinationPopup).addClass('show');
			
			$('.popup__body').animate({
        		 'top':'0'
       			},500);
			$(destinationPopup + ' .popup-close').click(function(e){
				e.preventDefault();
				$('.popup__body').animate({
        		 'top':'-1200'
       			},100);
				$(destinationPopup).removeClass('show');
				
			});
		});
		$('.learnmore').on('click', function(e){
			e.preventDefault();
			$('.first-left__text__showif1').toggleClass('first-left__text__showif1--active');
			$('.first-left__text__more1').addClass('first-left__text__more1--block');
		});
		$('.learnmore2').on('click', function(e){
			e.preventDefault();
			$('.first-left__text__showif2').toggleClass('first-left__text__showif2--active');
			$('.first-left__text__more2').addClass('first-left__text__more2--block');
		});
});