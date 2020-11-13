'use strict'

const reval = Array.from(document.querySelectorAll('.reveal'));

// window.addEventListener('scroll', function() {
//   reval.forEach(element => {
//   	const viewportHeight = window.innerHeight;
//   	const elementBottom = element.getBoundingClientRect().bottom;
//   	if (elementBottom < viewportHeight) {
//   		element.classList.add('reveal_active');
//   	}
//   });
// });

/*второй вариант, блок появляется только при 
нахождении элемента полностью в поле зрения*/ 

window.addEventListener('scroll', function() {
  reval.forEach(element => {
  	const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
  	const elementBottom = element.getBoundingClientRect().bottom;
  	if (elementBottom < viewportHeight && elementTop > 0) {
  		element.classList.add('reveal_active');
  	} else {
  		element.classList.remove('reveal_active');
  	}
  });
});