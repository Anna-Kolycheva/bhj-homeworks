'use strict'

const chatWidget = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
let masssges = document.querySelector('.chat-widget__messages');
let timeAsk;

chatWidget.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
    timeAsk = setTimeout(AskAQuestion, 30000);
    console.log(timeAsk);
})

function AskAQuestion() {
    masssges.innerHTML += `
		  <div class="message">
		  <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
          <div class="message__text">Хочешь расскажу монолог из фильма Рокки??</div>
          </div>`
}

const robotМessages = [
    'Я скажу то, что для тебя не новость: мир не такой уж солнечный и приветливый',
    'Это очень опасное, жесткое место, и если только дашь слабину, он опрокинет с такой силой тебя, что больше уже не встанешь',
    'Ни ты, ни я, никто на свете, не бьёт так сильно, как жизнь!',
    'Совсем не важно, как ты ударишь, а важно, какой держишь удар, как двигаешься вперёд',
    'Будешь идти — ИДИ! Если с испугу не свернёшь...',
    'Только так побеждают!'
]

chat.addEventListener('keyup', (event) => {
    clearTimeout(timeAsk);
    if (event.key === 'Enter' && input.value !== '') {
        masssges.innerHTML += `
		  <div class="message message_client">
		  <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
          <div class="message__text">${input.value}</div>
          </div>`

        input.value = '';

        masssges.innerHTML += `
		  <div class="message">
		  <div class="message__time">${new Date().toTimeString().slice(0,5)}</div>
          <div class="message__text">${robotМessages[Math.floor(Math.random() * robotМessages.length)]}</div>
          </div>`

        const first = document.querySelector('.message_client')
        let maxY = masssges.lastChild.getBoundingClientRect().top - first.getBoundingClientRect().top;
        let scroll = document.querySelector('.chat-widget__messages-container');
        scroll.scrollTo(0, maxY);
    }
})