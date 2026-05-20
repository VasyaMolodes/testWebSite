const swiper = new Swiper('.swiper', {

    loop: true,

    speed: 600,

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: 1.2,

    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});