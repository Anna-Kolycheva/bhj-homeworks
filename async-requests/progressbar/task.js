  
'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
     event.preventDefault();
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
     xhr.upload.onprogress = (event) => {
          document.getElementById('progress').value = event.loaded / event.total;
        }
     xhr.upload.onloadend = function() {
       progress.value = 1;
       alert( 'Данные загружены' );

    }   
     xhr.send(new FormData(form));
})