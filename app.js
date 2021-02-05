const upButton = document.querySelector(".up");

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 600) {
        upButton.style.right = '10px';
    } else{
        upButton.style.right = '-100px';
    }
})