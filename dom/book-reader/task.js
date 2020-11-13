'use strict'

let fontSize = document.querySelector('.book__control_font-size');
let textColor = document.querySelector('.book__control_color');
let bgColor = document.querySelector('.book__control_background');
let book = document.querySelector('.book');

let size = '',
    color, colorText;

fontSize.addEventListener('click', (event) => {
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    event.target.classList.add('font-size_active');
    book.classList.remove(`book_fs-${size}`);
    size = event.target.dataset.size;
    if (size) {
        book.classList.add("book_fs-" + size);
    }
    event.preventDefault();
})

textColor.addEventListener('click', (event) => {
    event.preventDefault();
    textColor.querySelector('.color_active').classList.remove('color_active');
    event.target.classList.add('color_active');
    book.classList.remove(`book_color-${colorText}`);
    colorText = event.target.dataset.textColor;
    book.classList.add("book_color-" + colorText);
})

bgColor.addEventListener('click', (event) => {
    event.preventDefault();
    bgColor.querySelector('.color_active').classList.remove('color_active');
    event.target.classList.add('color_active');
    book.classList.remove(`book_bg-${color}`);
    color = event.target.dataset.bgColor;
    book.classList.add("book_bg-" + color);
})