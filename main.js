const hamburgerBtn = document.querySelector('.icon-hamburger-js');
const closeBtn = document.querySelector('.icon-close-btn-js');

hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.header-right').classList.add('display-flex');
    closeBtn.classList.add('display-flex');
    document.querySelector('body').style.overflow = 'hidden';
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.header-right').classList.remove('display-flex');
    closeBtn.classList.remove('display-flex')
    document.querySelector('body').style.overflow = 'visible';
})

