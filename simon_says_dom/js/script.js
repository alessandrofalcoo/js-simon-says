/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 50) + 1;
    document.querySelector('li').innerHTML = random;
    
}

const randomNumber1 = Math.floor(Math.random() * 50);
const randomNumber2 = Math.floor(Math.random() * 50);
const randomNumber3 = Math.floor(Math.random() * 50);
const randomNumber4 = Math.floor(Math.random() * 50);
const randomNumber5 = Math.floor(Math.random() * 50);
/* document.querySelector('.num1').innerHTML = randomNumber1
document.querySelector('.num2').innerHTML = randomNumber2
document.querySelector('.num3').innerHTML = randomNumber3
document.querySelector('.num4').innerHTML = randomNumber4
document.querySelector('.num5').innerHTML = randomNumber5
 */
let sec = 30;
let timer = setInterval(function () {

    document.getElementById('countdown').innerHTML = '0:' + sec;
    sec--;
    if (sec < 0) {
        clearInterval(timer);
        document.getElementById('countdown').remove();
/*         document.querySelector('.num1').remove();
        document.querySelector('.num2').remove();
        document.querySelector('.num3').remove();
        document.querySelector('.num4').remove();
        document.querySelector('.num5').remove();
 */        const d_none = document.querySelector('.d-none');
        d_none.classList.remove('d-none');

    }
}, 100);







