import Auto from "./modules/auto.js"
import {Film} from "./modules/film.js"
import Pacijent from "./modules/pacijent.js";

let datum = new Date();
    // Date - Ime klase
    // new Date(); - kreira objekat klase Date.
    // let datum = new Date(); - pormenljiva datum cuva objekat klase Date.
console.log(datum.getDate());

let niz1 = [1, 2, 3];
let niz2 = new Array(1, 2, 3);

console.log(niz1, niz2);

let o1 = {
    ime: "Pera",
    godine: 25
};

let o2 = new Object();
o2.ime = "Marko";
o2.godine = 34;

console.log(o1,o2);



document.body.addEventListener('click', (e) => {
    if(e.target.tagName == "P") {
        e.target.remove();
    }
});
// Auto
// Klasa Auto
// Unutar Klasa i Objekata: Metode se pisu kao obicne funkcije, NIKADA kao arrow funkcije.

let auto1 = new Auto("Peugeot 208", "Bela", false);
    // constructor("Peugeot 208", "Bela", false);
        // auto1.marka = "Peugeot 208";
        // auto1.boja = "Bela";
        // auto1.imaKrov = false;
let auto2 = new Auto("Mazda CX-30", "Siva", true);
console.log(auto1, auto2);
auto2.sviraj();
auto1.sviraj();
auto2.sviraj();
console.log(auto1.aMarka); // Geteru se pristupa kao polju.


// Kreirati klasu Film koja od polja sadrži naslov, reziser i
// godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.

// Kreirati tri objekta klase Film.

// Testirati metode klase.

// Film

let film1 = new Film('Naslov filma1', "Ime rezisera", 2017);
let film2 = new Film('Naslov drugog filma', "Ime 2 rezisera", 2008);
let film3 = new Film('Naslov 3-ceg filma', "Ime 3 rezisera", 1337);

console.log(film1);
film1.stampaj();

console.log(film2.reziser);
film2.stampaj();

console.log(film3.godinaIzdanja);
film3.stampaj();
// Pacijent
let pacijent1 = new Pacijent("Danilo", 1.85, 600);
let pacijent2 = new Pacijent("Pera", 1.70, -20);
let pacijent3 = new Pacijent("Tika", 2.90, 98);

console.log(`Da li je prvi pacijent kritican: ${pacijent1.kritican()}`);
console.log(`Da li je drugi pacijent kritican: ${pacijent2.kritican()}`);
console.log(`Da li je treci pacijent kritican: ${pacijent3.kritican()}`);

console.log(`BMI Prvog Pacijenta: ${pacijent1.bmi()}`);
console.log(`BMI Drugog Pacijenta: ${pacijent2.bmi()}`);
console.log(`BMI Treceg Pacijenta: ${pacijent3.bmi()}`);

pacijent1.stampaj();
pacijent2.stampaj();
pacijent3.stampaj();

auto1.aMarka = "Citroen C5"; // Seteru se pristupa kao polju
auto1.aBoja = "Plava";
auto1.aImaKrov = true;
console.log(auto1);

let f1 = new Film("Naked Gun", "David Zucker", 1500);
console.log(f1.najranijaGodina);
console.log(f1.fNaslov);

