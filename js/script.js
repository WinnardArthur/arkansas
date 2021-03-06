$('.heroCarousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: 5000,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    mouseDrag: false,
    responsive: {
        0: {items: 1},
        600: {items: 1},
        1000: { items: 1}
    }
})

const heroOwl = $('.heroCarousel')
heroOwl.owlCarousel();



$('.nextHero').click(function(){
    heroOwl.trigger('next.owl.carousel');
})
$('.prevHero').click(function(){
    heroOwl.trigger('prev.owl.carousel', [300])
})

$('.selectFood__carousel').owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    autoplay: 0,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    mouseDrag: false,
    responsive: {
        0: {items: 1},
        600: {items: 1},
        1000: { items: 1}
    }
})

const testimonialOwl = $('.selectFood__carousel')
testimonialOwl.owlCarousel();

$('.nextFood').click(function(){
    testimonialOwl.trigger('next.owl.carousel');
})
$('.prevFood').click(function(){
    testimonialOwl.trigger('prev.owl.carousel', [300])
})

// updates

function showModal() {
    const modal = document.querySelector('.modal')
    const favoriteBtns = document.querySelectorAll('.favoriteBtn')

    for (var i = 0; i < favoriteBtns.length; i++) {
        var favoriteBtn = favoriteBtns[i];
        favoriteBtn.onclick = function () {
            modal.style.display = 'block'
        };
    }
    }

function closeModal() {
    const modal = document.querySelector('.modal')
    const closeModalBtn = document.querySelector('.closeModalBtn')

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}


