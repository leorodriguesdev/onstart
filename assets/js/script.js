/*-----------------------------------------------------------------------------------
    Template Name: Sland - HTML Template
    Template URI: https://webtend.net/demo/html/sland/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header Style
    02. Dropdown menu
    03. Submenu
    04. Search Box
    05. Scroll to Top
    06. Team Image Popup
    07. Project Filtering
    08. Feedback Slider One
    09. Feedback Slider Two
    10. Feedback Slider Three
    11. Dashboard Screenshot Slider
    12. Fact Counter
    13. Team skill Counter
    14. Nice Select
    15. WOW Animation
    16. Preloader
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // 04. Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
		// Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
        
        // 05. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
        
        
        // 06. Team Image Popup
        $('.team-member .image a').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        
        // 07. Project Filtering
        $(".project-filter li").on('click', function () {
            $(".project-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.project-active').imagesLoaded(function () {
                $(".project-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                });
            });

        });
        
        
        // 08. Feedback Slider One
        if ($('.feedback-wrap').length) {
            $('.feedback-wrap').slick({
                dots: true,
                infinite: false,
                autoplay: true,
                fade: true,
                autoplaySpeed: 5000,
                arrows: false,
                centerMode: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
        
        // 09. Feedback Slider Two
        if ($('.feedback-active').length) {
            $('.feedback-active').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: $('.feedback-prev'),
                nextArrow: $('.feedback-next'),
                centerMode: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
        
        
        // 10. Feedback Slider Three
        if ($('.feedback-three-wrap').length) {
            $('.feedback-three-wrap').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                appendDots: $('.slider-dots-area'),
                centerMode: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        
        
         // 11. Dashboard Screenshot Slider
        if ($('.dashboard-screenshot-wrap').length) {
            $('.dashboard-screenshot-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: '<button class="dashboard-prev"><i class="fas fa-arrow-left"></i></button>',
                nextArrow: '<button class="dashboard-next"><i class="fas fa-arrow-right"></i></button>',
                centerMode: true,
                centerPadding: '144px',
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            centerPadding: '50px',
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            centerPadding: '0',
                        }
                    }
                ]
            });
        }
        
        
         /* 12. Fact Counter + Text Count - Our Success */
        if ($('.success-item').length) {
            $('.success-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        /* 13. Team skill Counter */
		if ($.fn.circleProgress) {
			var progress1 = $('.one.progress-content')
			if($.fn.circleProgress) {
			  progress1.appear(function () {
				progress1.circleProgress({
					value: 0.75,
					size: 140,
                    thickness: 8,
					fill: "#5138ee",
                    lineCap: 'square',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(75 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress2 = $('.two.progress-content')
			if($.fn.circleProgress) {
			  progress2.appear(function () {
				progress2.circleProgress({
					value: 0.89,
					size: 140,
                    thickness: 8,
					fill: "#5138ee",
                    lineCap: 'square',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(89 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
		if ($.fn.circleProgress) {
			var progress3 = $('.three.progress-content')
			if($.fn.circleProgress) {
			  progress3.appear(function () {
				progress3.circleProgress({
					value: 0.67,
					size: 140,
                    thickness: 8,
					fill: "#5138ee",
                    lineCap: 'square',
                    startAngle: -Math.PI / 4 * 2,
					animation : { duration: 2000},
				  }).on('circle-animation-progress', function(event, progress) {
					$(this).find('h2').html(Math.round(67 * progress) + '<span>%</span>');
				  });
			  });
			};
		};
        
        
        // 14. Nice Select
        $('select').niceSelect();
        
        
        // 15. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
        
    });

    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();
        
    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {
        
        // 07. project Filtering
       if ($('.project-active').length) {
            $(".project-active").isotope({
                itemSelector: '.item',
            });
        };
        

        // 16. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
          
        
    });



})(window.jQuery);
