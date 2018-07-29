
$('#container').imagesLoaded()
    .always(() => {


        $('.loader').fadeOut('1500', function () {
            $(this).remove();
            $('.main-menu__item').each(function (i) {
                let row = $(this);
                setTimeout(function () {
                    row.addClass('loaded');
                }, 200 * i);
            });
        });

        let scrollClass = 'main-nav--scroll';
        let nav = $('.main-nav');

        window.onscroll = function () {
            if (window.scrollY > 510) {
                nav.addClass(scrollClass);
            } else {
                nav.removeClass(scrollClass);
            }
        };




        let link = $('.main-menu__link:not(".no-action")');
        link.on('click', function (e) {
            e.preventDefault();
            let el = $(this);
            let target = el.attr('href');
            let className = 'main-menu__item--current';
            link.parent().removeClass(className);
            el.parent().addClass(className);
            $('html').delay(50).animate({scrollTop: $(target).offset().top}, 500);
        });

        let slickContent = $('.slick-01.slick-content');
        let slickThumbnails = $('.slick-01.slick-thumb');

        if (slickContent.length) {
            slickContent.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: "<div class='bpc-prev'>PREV</div>",
                nextArrow: "<div class='bpc-next'>next</div>",
                asNavFor: '.slick-01.slick-thumb',

            });
        }

        if (slickThumbnails.length) {
            slickThumbnails.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slick-01.slick-content',
                focusOnSelect: true,
                centerMode: true,
                arrows: false,
                centerPadding: '0',
            });
        }
    });