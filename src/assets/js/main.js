(function ($) {
    'use strict';
    /*=============================================
	=              Preloader       =
    =============================================*/
    function preloader() {
        $('#preloader').delay(0).fadeOut();
    }
    /*=============================================
    =     Offcanvas Menu      =
    =============================================*/
    function offcanvasMenu() {
        $(".menu-tigger").on("click", function () {
            $(".offCanvas__info, .offCanvas__overly").addClass("active");
            return false;
        });
        $(".menu-close, .offCanvas__overly").on("click", function () {
            $(".offCanvas__info, .offCanvas__overly").removeClass("active");
        });
    }
    /*=============================================
	=          Data Background      =
    =============================================*/
    function dataBackground() {
        $('[data-background]').each(function () {
            $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
        });
    }
    /*=============================================
	=           Go to top       =
    =============================================*/
    function progressPageLoad() {
        var progressWrap = document.querySelector('.btn-scroll-top');
        if (progressWrap != null) {
            var progressPath = document.querySelector('.btn-scroll-top path');
            var pathLength = progressPath.getTotalLength();
            var offset = 50;
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            window.addEventListener('scroll', function (event) {
                var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
                var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollElementPos >= offset) {
                    progressWrap.classList.add('active-progress');
                } else {
                    progressWrap.classList.remove('active-progress');
                }
            });
            progressWrap.addEventListener('click', function (e) {
                e.preventDefault();
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            });
        }
    }
    /*=============================================
	=           Aos Active       =
    =============================================*/
    function aosAnimation() {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
            disable: 'mobile',
        });
    }
    /*=============================================
	=           counterState       =
    =============================================*/
    function counterState() {
        var counters = document.querySelectorAll('.counter');
        counters.forEach(function (counter) {
            var countTo = counter.getAttribute('data-count');
            var countNum = parseInt(counter.textContent);
            var duration = 4000;
            var stepDuration = duration / Math.abs(countTo - countNum);
            var increment = countTo > countNum ? 1 : -1;
            var timer = setInterval(function () {
                countNum += increment;
                counter.textContent = countNum;
                if (countNum == countTo) {
                    clearInterval(timer);
                    //alert('finished');
                }
            }, stepDuration);
        });
    }
    /*=============================================
	=    		Magnific Popup		      =
    =============================================*/
    function magnificPopup() {
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe',
        });
    }
    /*=============================================
	=    		 Wow Active  	         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }
    function customSwiper() {
        const slider1 = new Swiper('.slider-1', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                afterInit: function () {
                    // set padding left slide
                    var leftPadding = 0;
                    var swipperRoot = $('.swipper-root');
                    if (swipperRoot.length > 0) {
                        leftPadding = swipperRoot.offset().left;
                    }
                    if ($('.box-swiper-padding').length > 0) {
                        $('.box-swiper-padding').css('padding-left', leftPadding + 'px');
                    }
                },
            },
        });
        const slider2 = new Swiper('.slider-2', {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 1,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                afterInit: function () {
                    // set padding left slide
                    var leftPadding = 0;
                    var swipperRoot = $('.swipper-root');
                    if (swipperRoot.length > 0) {
                        leftPadding = swipperRoot.offset().left;
                    }
                    if ($('.box-swiper-padding').length > 0) {
                        $('.box-swiper-padding').css('padding-left', leftPadding + 'px');
                    }
                },
            },
        });
    }
    /*=============================================
	=           Page Load       =
    =============================================*/
    $(window).on('load', function () {
        preloader();
        progressPageLoad();
        offcanvasMenu();
        dataBackground();
        aosAnimation();
        counterState();
        customSwiper();
        magnificPopup();
        wowAnimation();
    });
})(jQuery);
