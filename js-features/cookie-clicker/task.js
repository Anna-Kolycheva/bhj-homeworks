'use strict'

const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");


// вычисляет среднюю скорость клика, но с момента обновления страницы

let time = new Date();
image.onclick = () => {
	 counter.textContent ++;
	 (image.width === 200) ? image.width = 220 : image.width = 200;
	 speed.textContent = `${(counter.textContent/((new Date - time)/1000)).toFixed(2)}`;
}


// вычисляет скорость последнего клика

// let lastClickTime;
// image.onclick = () => {
// 	let time = new Date();
// 	counter.textContent ++;
// 	(image.width === 200) ? image.width = 220 : image.width = 200;
// 	if (lastClickTime) {
// 		speed.textContent = `${(1/((new Date().getTime() - lastClickTime)/1000)).toFixed(2)}`;
//     }
// 	lastClickTime = time.getTime()
// }