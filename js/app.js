const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    autoplay: {
        delay: 5000,
    },
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});






setInterval(function() {
    let banner = document.querySelector("#banner")
    let images = ["../src/samarkand.jpg", "../src/xiva.jpg", "../src/samarkand.jpg"]
    let index = 0

    console.log(banner)
    if (index > images.length) {
        index = 0
    } else {
        index++
        banner.style.backgroundImage = `url(${images[index]})`
    }

    console.log(index)
}, 3000)