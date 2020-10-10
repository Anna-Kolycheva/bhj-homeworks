'use strict'

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let getHole = index => document.getElementById(`hole${index}`);
let time;

for (let i = 1; i < 10; i++) {

    let hole = getHole(i);
    hole.onclick = () => {

        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent == 1 && lost.textContent == 0 || dead.textContent == 0 && lost.textContent == 1) {
            time = setTimeout(
                () => {
                    alert('time is over!');
                    dead.textContent = 0;
                    lost.textContent = 0;
                }, 20000);
        }
        if (dead.textContent == 10) {
            alert('you won!!');
            dead.textContent = 0;
            lost.textContent = 0;
            clearTimeout(time);
        }
        if (lost.textContent == 5) {
            alert('you lose!');
            dead.textContent = 0;
            lost.textContent = 0;
            clearTimeout(time);
        }
    }
}
