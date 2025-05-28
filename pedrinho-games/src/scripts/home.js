$(document).ready(function() {

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }else {
            header.css('box-shadow', '5px 1px 5px rgb(79, 117, 223)');
        }
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.game', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
});
