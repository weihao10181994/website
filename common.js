$(function(){
    $('.owl-carousel').owlCarousel({
        items: 4,
        stagePadding: 200,
        loop: true,
        margin: 40,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        slideTransition: 'linear',
    });
    $('.owl-carousel').trigger('next.owl.carousel');
})

