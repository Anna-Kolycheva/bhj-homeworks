'use strict'

const textArea = document.getElementById('editor');
const clear = document.getElementById('clear');

textArea.addEventListener('keyup', event => {
	localStorage.setItem('text', textArea.value);
})

textArea.value = localStorage.getItem('text');

clear.addEventListener('click', event => {
	localStorage.removeItem('text');
	textArea.value = '';
})