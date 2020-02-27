
// Slika open/closed
let vreme = new Date();

let sati = vreme.getHours();

let div = document.getElementById('open');

if (sati > 9 || sati < 17) {
    div.innerHTML = "<img src='slike/otvoreno.jpg'>";
}
else {
    div.innerHTML = "<img src='slike/zatvoreno.jpg'>";
}

// Paragraf ispod slike
let dan = vreme.getDay();
let mesec = vreme.getMonth();
let godina = vreme.getFullYear();
let datum = vreme.getDate();
let paragraf = document.getElementById('paragraf');

mesec++;

if (dan == 0) {
    paragraf.innerHTML = ('Nedelja' + " - " + datum + "." + mesec++ + "." + godina);
}
else if (dan == 1) {
    paragraf.innerHTML = ('Ponedeljak' + " - " + datum + "." + mesec++ + "." + godina);
}
else if (dan == 2) {
    paragraf.innerHTML = ('Utorak'  + " - " + datum + "." + mesec + "." + godina);
}
else if (dan == 3) {
    paragraf.innerHTML = ('Sread' + " - " + datum + "." + mesec + "." + godina);
}
else if (dan == 4) {
    paragraf.innerHTML = ('Cetvrtak' + " - " + datum + "." + mesec + "." + godina);
}
else if (dan == 5) {
    paragraf.innerHTML = ('Petak' + " - " + datum + "." + mesec + "." + godina);
}
else if (dan == 6) {
    paragraf.innerHTML = ('Subota' + " - " + datum + "." + mesec + "." + godina);
}

// 1.Zadatak 

let postarina;
let tezina;
let popust;
tezina = 230;

postarina = 5 * tezina;

popust = postarina * 90/100;

console.log('Cena bez popusta je ' + postarina + ', cena sa popustom je ' + popust + ' dinara')

// 2. Zadatak

sati;
let minuti = vreme.getMinutes();

if (sati < 9) {
    console.log('Pre radnog vremena');
}
else if ( sati > 17 ) {
    console.log('Nakon radnog vremena');
}


let minDoKraja = 17*60 - (sati*60 + minuti);
console.log(minDoKraja);

// 3.Zadatak 

let plavi = 15;
let zuti = 17;
let Ukupno = 25;


console.log("Buket ima ukupno " + Ukupno + " cvetova, od toga " + zuti + " koji sadrze zutu boju i " + plavi + " koji sadrze plavu boju" )

console.log((plavi + zuti) - Ukupno);

if (plavi >= 10 || zuti >= 10 || (plavi >=5 && zuti >=5)) {
    console.log('Ekskluzivan')
}
else {
    console.log('Nije ekskluzivan');
}



