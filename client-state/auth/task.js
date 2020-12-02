const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
	welcome.classList.add('welcome_active');
	userId.innerText = localStorage.getItem('user_id');
} else {
	signin.classList.add('signin_active');
}

signinBtn.addEventListener('click', event => {
	event.preventDefault();
	
	const xhr = new XMLHttpRequest();
	const formData = new FormData(document.getElementById('signin__form'));
	
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');  
    xhr.onload = () => {
    	const data = JSON.parse(xhr.responseText);
    	if (data.success === true) {
    		signin.classList.remove('signin_active');
    		welcome.classList.add('welcome_active');
    		userId.innerText = data.user_id;
    		localStorage.setItem('user_id', data.user_id);
		} else {
			alert("«Неверный логин/пароль»")
		}
    }
    xhr.send(formData);
});

