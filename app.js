/*var typed = new Typed(".typed",{
    strings : ["Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor", "Graphic Designer", "Video Editor"],
    typeSpeed : 120,
    backSpeed : 100,
    looped : true,
})*/


// MENU
let myBtn = document.getElementById('ham-menu');
let myMenu = document.getElementById('drop-menu');
let closeMenu = document.getElementById('x-mark');



myBtn.addEventListener('click', event => {
    myMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', event => {
    myMenu.style.display = 'none';
});


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

//ScrollReveal().reveal('.left-head', { delay: 500, origin: 'left' });

//ScrollReveal().reveal('.right-head', { delay: 500, origin: 'right' });

ScrollReveal().reveal('.work-center, .sp', { delay: 500, origin: 'top' });

ScrollReveal().reveal('.spcd', { delay: 500, origin: 'left' });


ScrollReveal().reveal('.click-btn', { delay: 100, origin: 'right' });

ScrollReveal().reveal('.one', { delay: 50, origin: 'left' });
ScrollReveal().reveal('.two', { delay: 50, origin: 'top' });
ScrollReveal().reveal('.three', { delay: 50, origin: 'right' });