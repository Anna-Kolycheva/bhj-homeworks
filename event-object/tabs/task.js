'use strict'

const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(element => {
    element.addEventListener('click', (event) => {
        let i = tabs.indexOf(element);
        document.querySelector('.tab_active').classList.remove('tab_active');
        element.classList.add('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        tabContents[i].classList.add('tab__content_active');
    })
})