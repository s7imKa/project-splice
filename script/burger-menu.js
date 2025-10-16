const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.header__menu')
const nav = document.querySelector('.header__nav-list')



burger.addEventListener('click', () => {
    burger.classList.toggle('burger-is-active')
    burgerMenu.classList.toggle('is-active')
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burger.classList.remove('burger-is-active')
        burgerMenu.classList.remove('is-active')
    }
})
