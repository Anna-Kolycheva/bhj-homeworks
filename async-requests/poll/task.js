'use strict';


let xhr = new XMLHttpRequest();
let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function() {

    if (xhr.readyState === 4 && xhr.status === 200) {
        
        let data = JSON.parse(xhr.responseText);
        let dataTitle = data.data.title;
        let dataAnswers = data.data.answers;
        let id = data.id;
        let n = 0;
		
		title.insertAdjacentHTML('afterbegin', `${dataTitle}`);

        for (let answer in dataAnswers) {
            answers.insertAdjacentHTML('beforeend',
                `</button>
        		<button class="poll__answer" data-vote="${n}">
				${dataAnswers[answer]}
				</button>`);
            n++;
        }

        let bottons = Array.from(document.querySelectorAll('.poll__answer'));

        bottons.forEach(element => {
           
            element.addEventListener('click', (event) => {
                
                let xhrStat = new XMLHttpRequest();
                event.preventDefault();

                xhrStat.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhrStat.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrStat.send(`vote=${id}&answer=${element.dataset.vote}`);
                xhrStat.onreadystatechange = function() {
                    
                    if (xhrStat.readyState === 4 && xhr.status === 200) {
                        let StatdataAnswers = JSON.parse(xhrStat.responseText).stat;
                        alert('Спасибо, ваш голос засчитан!');
                        answers.innerHTML = "";
                        
                        for (let answer in StatdataAnswers) {
                            answers.insertAdjacentHTML('beforeend',
                                `<div>${StatdataAnswers[answer].answer}: ${StatdataAnswers[answer].votes}</div>`
                            )
                        }
                    }
                }
            })
        })
    }
}