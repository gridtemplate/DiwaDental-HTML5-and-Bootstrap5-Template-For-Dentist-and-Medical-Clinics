(function ($) {
    "use strict";

    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    /*--
  		magnificPopup video view
  	-----------------------------------*/
  	$('.popup-video').magnificPopup({
  		type: 'iframe'
  	});

    /*=============================================
    =                Mobile Menu                  =
    =============================================*/

    /*Variables*/
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active-expand');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active-expand');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active-expand');
                $this.siblings('ul').slideDown();
            }
        }
    });

    $( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );

    /*--
		sticky Menu
	-----------------------------------*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-bottom").removeClass("sticky");
		} else {
			$(".header-bottom").addClass("sticky");
		}
	});


    /*--
		Info Bar
	-----------------------------------*/
	$(".info-toggle-btn").on("click", function () {

		$(".extra-info").addClass("info-opened");

		$(".body-overlay").addClass("opened");

	});

	$(".info-close-btn").on("click", function () {

		$(".extra-info").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

	$(".body-overlay").on("click", function () {

		$(".extra-info").removeClass("info-opened");

		$(".body-overlay").removeClass("opened");

	});

    /*--
		Main-Slider
	-----------------------------------*/
    function mainSlider() {
      var BasicSlider = $('.slider-active, .slider-active-2');
      BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
      });

      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
      });


      BasicSlider.slick({
          autoplay: true,
          autoplaySpeed: 7000,
          dots: false,
          fade: true,
          arrows: true,
          prevArrow: '<span class="prev"><i class="ri-arrow-left-s-line"></i></span>',
          nextArrow: '<span class="next"><i class="ri-arrow-right-s-line"></i></span>',
          pauseOnHover: false,
          responsive: [
              {
                  breakpoint: 767,
                  settings: {
                      dots: true,
                      arrows: false
                  }
              }
          ]
      });


      function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
              var $this = $(this);
              var $animationDelay = $this.data('delay');
              var $animationType = 'animated ' + $this.data('animation');
              $this.css({
                  'animation-delay': $animationDelay,
                  '-webkit-animation-delay': $animationDelay
              });
              $this.addClass($animationType).one(animationEndEvents, function () {
                  $this.removeClass($animationType);
              });
          });
      }
  }
  mainSlider();



   /*--
		Testimonial Active
	-----------------------------------*/
	$('.testimonial-active').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
			}
		},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false
			}
		}
		]
	});

   /*--
		Testimonial-2 Active
	-----------------------------------*/
	$('.testimonial-2-active').slick({
		dots: false,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,

		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});

    /*--
		Blog Post Gallery
	-----------------------------------*/
	$('.blog-post-gallery').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<span class="prev"><i class="ri-arrow-left-s-line"></i></span>',
		nextArrow: '<span class="next"><i class="ri-arrow-right-s-line"></i></span>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});


    /*--
      nice select
    -----------------------------------*/
	  $('select').niceSelect();

   /*--
        Date Picker
    -----------------------------------*/
    $('#datepicker').datepicker({
      icons: {
        rightIcon: '<i class="flaticon-schedule"></i>'
      }
    });



   /*--
        Back to top Script
    -----------------------------------*/
      // Show or hide the sticky footer button
      $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top, .back-to-top-2').fadeIn(200)
        } else {
            $('.back-to-top, .back-to-top-2').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('.back-to-top, .back-to-top-2').on('click', function (event) {
    event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });






})(jQuery);
