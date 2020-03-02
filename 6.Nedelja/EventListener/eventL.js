let dugmeZdravo = document.getElementById('dugme');
dugmeZdravo.addEventListener('click', () => {
    console.log('Hello!');
    let paragraf = document.getElementById('paragraf');
    paragraf.innerHTML += " Neki tekst";
});

// 1. Nparvaiti dugme klikom na koje se u konzoli ispisuje vrednost brojaca br. Brojac na pocetku ima vrednost 1, a savki put kada se klikne na dugme povecati vrednost brojaca za 1.
let br = 1;
let brojacDugme = document.getElementById('brojac');
brojacDugme.addEventListener('click', () => {
    br++;
    console.log(br);
    let paragraf = document.getElementById('paragraf');
    paragraf.innerHTML = `Vrednost brojaca je: ${br}`;
});

// 2.Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

// 3.Napraviti dugme + i dugme -.Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1. Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let brojac = 0;
let span = document.getElementById('rezultat');
span.innerHTML = brojac;

let minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    brojac--;
    if(brojac < 0){
        brojac = 0;
    }
    span.innerHTML = `${brojac}`;
});

let plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    brojac++;
    span.innerHTML = `${brojac}`;
});

// 4.Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

// 5.Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

let dumgePozdrav = document.getElementById('buttonPozdrav');


dumgePozdrav.addEventListener('click', () => {
    let inputPozdrav = document.getElementById('inputPozdrav').value;

    let paragrafPozdrav = document.getElementById('paragrafPozdrav');

    paragrafPozdrav.innerText = `Zdravo ${inputPozdrav}!`;
});

// 6. Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let izracunajKv = document.getElementById('buttonKv');
let rezRacunanja = document.querySelector('#rez');
izracunajKv.addEventListener('click', () => {
    let br = document.querySelector('#inputKv').value;
    let kv = br*br;
    rezRacunanja.innerHTML = `Rezultat je ${kv}`;
});

let izracujanPola = document.getElementById('prepoloviBtn');

izracujanPola.addEventListener('click', () => {
    let br = document.getElementById('prepoloviInput').value;
    let pola = br/2;
    rezRacunanja.innerHTML = `Rezultat je ${pola}`;
});

let izracunajPK = document.querySelector('#krugBtn');

izracunajPK.addEventListener('click', () => {
    let br = document.querySelector('#krugInput').value;
    let pk = br*br*Math.PI;
    rezRacunanja.innerHTML = `Povrsina kruga je${pk}`;
});

