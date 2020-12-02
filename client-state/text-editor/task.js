'use strict'

const textArea = document.getElementById('editor');
const clear = document.getElementById('clear');

textArea.addEventListener('keyup', event => {
	localStorage.setItem('text', textArea.value);
})

if (localStorage.text !== undefined) {
	textArea.value = localStorage.text;
}


clear.addEventListener('click', event => {
	localStorage.clear();
	textArea.value = '';
})