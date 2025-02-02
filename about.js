// MENU
let myBtn = document.getElementById('ham-menu');
let myMenu = document.getElementById('drop-menu');
let closeMenu = document.getElementById('x-mark')



myBtn.addEventListener('click', event => {
    myMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', event => {
    myMenu.style.display = 'none';
});


ScrollReveal().reveal('.ab', { delay: 500, origin: 'left' });
