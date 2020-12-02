'use strict';

let loader = document.getElementById('loader');
let items = document.getElementById('items');
let xhr = new XMLHttpRequest();
Storage.clear()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove('loader_active');

        let data = JSON.parse(xhr.responseText).response.Valute;

        for (let item in data) {
            items.insertAdjacentHTML('beforeend', `
				<div class="item">
					<div class="item__code">
						${data[item].CharCode}
					</div>
					<div class="item__value">
						${data[item].Value}
					</div>
					<div class="item__currency">
						руб.
					</div>
				</div>`)
        }
    };
};
