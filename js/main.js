const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navButtonImg.src = "./img/icons/NAV CLOSE.svg";
    } else {
        navButtonImg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init({
    once: true
});