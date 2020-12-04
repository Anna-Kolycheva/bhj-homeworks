'use strict'

const modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

if (getCookie('modalClosed') !== 'true') {
     modal.classList.add('modal_active');
}

close.onclick = () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
}
