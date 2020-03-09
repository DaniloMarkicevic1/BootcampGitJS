import createDiv from "./modules/result_div.js";
import {tacniOdgovori, calculateScore} from "./modules/aswers.js";
import generateScore from "./modules/clock.js";

let form = document.querySelector('form');

let [div, h2] = createDiv('intro', document.body, document.body.children[1]);


form.addEventListener('submit', event => {
    event.preventDefault(); // Sprecava slanje serveru

    // Potrebno je odrediti koji radio je selektovan
    // Generalni nacin: 
    /*
    let radios = document.querySelectorAll('.q1');
    radios.forEach(radio => {
        if(radio.checked) {
            console.log(radio.value);
        }
    });
    */

   // Za forme: 
   // 1) U JS kodu moramo da imamo objekat forme(promenljiva form).
   // 2) Svi elementi forme u HTML-u moraju da imaju name atribut.
    let odg1 = form.q1.value; // Value chekiranog radio button-a
    let odg2 = form.q2.value
    let odg3 = form.q3.value
    let odg4 = form.q4.value
    let odg5 = form.q5.value

    let odgovori = [odg1, odg2, odg3, odg4, odg5];

    let skor = calculateScore(odgovori);

    console.log(skor);
    div.style.display = 'block';
    scrollTo(0, 0);

    generateScore(h2, skor);
});
