$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//sss
const burgerMenu = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.top-menu')
burgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show')
})
// Hide menu  when click nav links
const  menulinks = document.querySelectorAll('.top-menu a')
menulinks.forEach(item => item.addEventListener('click', () => {
    topMenu.classList.remove('show')
}))
