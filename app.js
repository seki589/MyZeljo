const menuIcon = document.querySelector('.toggle');
const menu = document.querySelector('.menu ');
const menu_item = document.querySelectorAll('.menu .bar .nav-link');
const menu_b = document.querySelector('.menu-b');
const upButton = document.querySelector(".up");
const clButton = document.querySelector('.sub');
const opButton = document.querySelector('.down');
const police = document.querySelector('.police');
const private = document.querySelector('.rght');
const theButton = document.querySelectorAll('.item .btn');
const recepies = document.querySelector('.items .recepies');
const items = document.querySelector('.items')


menuIcon.addEventListener('click', () => {
menu.classList.toggle('change');
menuIcon.classList.toggle('change');
menu_b.classList.toggle('change');
});

menu_b.addEventListener('click', () => {
    menu.classList.toggle('change');
    menuIcon.classList.toggle('change');
    menu_b.classList.toggle('change');   
});

// theButton.forEach((button) => {
//     button.addEventListener('click', () => {
//         recepies.classList.toggle('open-tab');
//         items.classList.toggle('open-tab');
//         const openRecepies = button.getAttribute("open");
//     })
// })

menu_item.forEach((item) => {
    item.addEventListener('click',() => {
        menu.classList.toggle('change');
        menuIcon.classList.toggle('change');
        menu_b.classList.toggle('change');
    })
    
});

private.addEventListener('click', () => {
    opButton.classList.toggle('rotate');
    police.classList.toggle('open')
})

opButton.addEventListener('click', () => {
    opButton.classList.toggle('rotate');
    police.classList.toggle('open');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 600) {
        upButton.style.right = '10px';
    } else{
        upButton.style.right = '-100px';
    }
})