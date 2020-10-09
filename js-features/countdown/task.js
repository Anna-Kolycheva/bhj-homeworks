'use strict'

// const timer = () => {
// 	const time = document.getElementById('timer');
// 	if (time.textContent > 0) {
// 		time.textContent -= 1; 
// 	} else {
// 		alert('Вы победили в конкурсе!'); 
// 		clearInterval(timeInterval);
// 	}
// } 
// const timeInterval = setInterval(timer, 1000);



// #1 и #2
//не очень понятна задача, но вот что получилось :)

  let time = document.getElementById('timer');
   let hh = 4;
   let mm = 25;
   let ss = 19;
   time.textContent = `${(hh < 10) ? '0' + hh : hh}:${(mm < 10) ? '0' + mm : mm}:${(ss < 10) ? '0' + ss : ss}`;

const timer = () => {
	if (ss > 0) {
		ss -= 1;
	} else if (mm > 0) {
		ss = 59;
		mm -=1;
    } else if (hh > 0) {
      	mm = 59;
      	hh -=1;
	} else {
		alert('Вы победили в конкурсе!');
		clearInterval(timeInterval);
		let image = document.getElementById('download');
		image.click();
	}
	time.textContent = `${(hh < 10) ? '0' + hh : hh}:${(mm < 10) ? '0' + mm : mm}:${(ss < 10) ? '0' + ss : ss}`;
}

const timeInterval = setInterval(timer, 1000);



