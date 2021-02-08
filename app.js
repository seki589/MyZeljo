const menuIcon = document.querySelector('.toggle');
const menu = document.querySelector('.menu ');
const menuList = document.querySelector('.menu, li, a ');
const upButton = document.querySelector(".up");

menuIcon.addEventListener('click', () => {
menu.classList.toggle('change');
menuIcon.classList.toggle('change');
})

menuList.addEventListener('click', () => {
    menu.classList.toggle('change');
    menuIcon.classList.toggle('change');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 600) {
        upButton.style.right = '10px';
    } else{
        upButton.style.right = '-100px';
    }
})