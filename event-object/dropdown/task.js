'use strict'

const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(element => {
element.addEventListener('click', (event) => {
	console.log(event.target);
	element.querySelector('.dropdown__value').textContent = event.target.textContent;
	element.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
	event.preventDefault();
})
})
