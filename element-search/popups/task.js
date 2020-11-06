'use strict'

document.getElementById("modal_main").classList.add('modal_active');

document.getElementsByClassName("show-success")[0].onclick = () => {
    document.getElementById("modal_main").classList.remove('modal_active');
    document.getElementById("modal_success").classList.add('modal_active');
}

let close = Array.from(document.getElementsByClassName("modal__close_times"));
close.forEach(element => {
    element.onclick = () =>
        document.getElementsByClassName("modal_active")[0].classList.remove('modal_active');
});
