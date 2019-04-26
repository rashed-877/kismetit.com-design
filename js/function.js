
// dropdown navigation
$(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });

    

// aos initilization
AOS.init();


// slick slider
$(".supported-inner").slick({
    autoplay:true,
    autoplaySpeed: 500,
    dots:true,
    infinite:true,
    slidesToRoll:3,
    slidesToShow:4,
    centerMode:true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: "unslick"
        }

    ]
});


$(".provider-comment").slick({
    autoplay:true,
    infinite:true,
    slidesToRoll:1,
    slidesToShow:1,
});


$(".studies-inner").slick({
    autoplay:true,
    dots:true,
    infinite:true,
    slidesToShow:3,
    slidesToRoll:2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: "unslick"
        }

    ]
});


$(window).resize(function () {
    $('.js-slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.js-slider').not('.slick-initialized').slick('resize');
});
// slick slider end



// back to top button
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
  
    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
            return false;
    });
  
});
// back to top end