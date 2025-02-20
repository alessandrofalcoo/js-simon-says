/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let ranNumbs = [];
for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 50) + 1;
    ranNumbs.push(random);
}

const listItems = document.querySelectorAll('li');
for (let i = 0; i < ranNumbs.length; i++) {
    listItems[i].innerText = ranNumbs[i];
}

let sec = 30;
let timer = setInterval(function () {

    document.getElementById('countdown').innerHTML = '0:' + sec;
    sec--;
    if (sec < 0) {
        document.getElementById('instructions').remove();
        document.querySelector('ul').remove();
        clearInterval(timer);
        document.getElementById('countdown').remove();
        const d_none = document.querySelector('.d-none');
        d_none.classList.remove('d-none');

    }
}, 1000);


const button = document.querySelector('button');
const result = document.getElementById('message');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let correctNumbs = [];
    const userNum = document.querySelectorAll('.form-control');
    const userNumbs = [];
    for (let i = 0; i < userNum.length; i++) {
        userNumbs.push(Number(userNum[i].value));
    }
    for (let i = 0; i < ranNumbs.length; i++) {
        if (userNumbs[i] === ranNumbs[i]) {
            correctNumbs.push(userNumbs[i])
        }
    }
    if (correctNumbs.length > 0) {
        result.textContent = 'bravo hai indovinato ' + correctNumbs.join(', ');
    } else {
        result.textContent = 'Mi spiace non ne hai indovinato neanche uno';

    }
});









