
const hamb = document.querySelector('#hamb');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hasfade = document.querySelectorAll('.has-fade');

hamb.addEventListener('click', function () {
    console.log('Click Hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        hasfade.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } else {
        header.classList.add('open');
        hasfade.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }

})