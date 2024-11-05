const header = document.querySelector('header')
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', this.window.scrollY > 180)
})



// 올해 연도 구하기
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()



// responsive menu 
let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.nav')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}



// responsive menu scroll 
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navList.classList.remove('open')
}

