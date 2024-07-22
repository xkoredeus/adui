$(window).on('load', function () {
    $('.preloader__wrapper').fadeOut();
    $('body').removeClass('is-loading');
});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});

$(() => {
    $(".js-button-anchor").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("data-to");
        $('html,body').animate({scrollTop: $(aid).offset().top},1300);


        if ($('.header').hasClass('active')) {
            $('.burger').removeClass('active');
            $('.header').removeClass('active')
        }
    });
});


// header
$(() => {
    $('.js-toggle-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('active')
        $('body').toggleClass('is-loading');
    });
});
// containers
$(() => {
    $(document).on('click', function (e) {
        var container = $('.header.active');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('active');
            $('.burger').removeClass('active')
            $('body').removeClass('active');
        }
    });
});

//tabs
$(() => {
    $('.tabs-content__item:last-child').hide();
    $('.tabs-list__item:first-child').addClass('active');
    $('.tabs-list .tabs-list__item').click(function popupTabListLiClick() {
        if (!($(this).hasClass('active')) && !($(this).hasClass('error'))) {
            const thisLi = $(this);
            const numLi = thisLi.index();

            thisLi.parents('.tabs').find('.tabs-list__item').removeClass('active');
            thisLi.addClass('active');
            thisLi.parents('.tabs').find('.tabs-content__item').hide()
                .eq(numLi)
                .fadeIn('slow');
        }
    });
});


// fancybox
$(() => {
    const fancyOpts = {
        animationDuration: 600,
        animationEffect: 'slide-in-in',
        touch: false,
        scrolling: true,
    }

    $('[data-fancybox]').fancybox({
        ...fancyOpts
    });

    $('.js-close-fancybox').on('click', function () {
        $.fancybox.close();
    });
});


$(() => {
    $('.question-item:first-child').addClass('active');
    $('.question-item:not(:first-child)').find('.question-item__content').hide();

    $('.js-toggle-question').on('click', function () {
        $(this)
            .parents('.question-item')
            .toggleClass('active')
            .find('.question-item__content')
            .slideToggle();
    });
});

// $(window).on('load', function () {
//     var specInit = false;
//     var specSwiper;
//     function initSpec() {
//         if ($('.spec-row__wrapper').parents('html').length > 0) {
//             if (window.innerWidth <= 976) {
//                 if (!specInit) {
//                     $('.spec-row')
//                         .addClass('swiper-wrapper')
//                         .removeClass('row')
//                         .parents('.spec-row__wrapper')
//                         .addClass('js-spec-slider')
//                         .find('.spec-slide')
//                         .addClass('swiper-slide')
//                         .removeClass('col-lg-6');
//
//                     specInit = true;
//                     specSwiper = new Swiper(".js-spec-slider", {
//                         speed: 1200,
//                         navigation: {
//                             nextEl: ".js-spec-slider-next",
//                             prevEl: ".js-spec-slider-prev",
//                         },
//                         slidesPerView: 1,
//                         spaceBetween: 8,
//                     });
//                 }
//             } else if (specInit) {
//                 specSwiper.destroy();
//                 specInit = false;
//
//                 $('.spec-row__wrapper')
//                     .removeClass('js-spec-slider')
//                     .find('.spec-row')
//                     .addClass('row')
//                     .find('.spec-slide')
//                     .removeClass('swiper-slide-active')
//                     .removeClass('swiper-slide')
//                     .addClass('col-lg-6');
//             }
//         }
//     }
//     var vacInit = false;
//     var vacSwiper;
//     function initVac() {
//         if ($('.vacancy-list__wrapper').parents('html').length > 0) {
//             if (window.innerWidth <= 976) {
//                 if (!vacInit) {
//                     $('.vacancy-list')
//                         .addClass('swiper-wrapper')
//                         .removeClass('row')
//                         .parents('.vacancy-list__wrapper')
//                         .addClass('js-vac-slider')
//                         .find('.vacancy-wrapper')
//                         .addClass('swiper-slide')
//                         .removeClass('col-lg-4');
//
//                     vacInit = true;
//                     vacSwiper = new Swiper(".js-vac-slider", {
//                         speed: 1200,
//                         navigation: {
//                             nextEl: ".js-vac-slider-next",
//                             prevEl: ".js-vac-slider-prev",
//                         },
//                         slidesPerView: 1,
//                         spaceBetween: 8,
//                     });
//                 }
//             } else if (vacInit) {
//                 vacSwiper.destroy();
//                 vacInit = false;
//
//                 $('.vacancy-list__wrapper')
//                     .removeClass('js-vac-slider')
//                     .find('.vacancy-list')
//                     .addClass('row')
//                     .find('.vacancy-wrapper')
//                     .removeClass('swiper-slide-active')
//                     .removeClass('swiper-slide')
//                     .addClass('col-lg-4');
//             }
//         }
//     }
//
//     function initHeader() {
//         if ($(window).width() < 768) {
//             $('.header-nav').appendTo('.menu-content');
//         } else {
//             $('.header-nav').appendTo('.header-nav__wrapper');
//         }
//     }
//
//     initSpec();
//     initVac();
//     initHeader();
//
//     var oldWidth = $(window).width();
//     $(window).bind('resize', function () {
//         var nw = $(window).width();
//         if (oldWidth !== nw) {
//             initSpec();
//             initHeader();
//         }
//         oldWidth = nw;
//     });
// })


