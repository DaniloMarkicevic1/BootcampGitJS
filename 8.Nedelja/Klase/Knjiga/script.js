import {Knjiga} from "./knjiga.js";
import { PacijentGS } from "./pacijent_gs.js";

let book1 = new Knjiga('Na Drini Cuprija', 'Ivo Andric', 2003, 700, 900);
let book2 = new Knjiga('Orlovi Rano Lete', 'Branko Copic', 2006, 185, 340);
let book3 = new Knjiga('Naslov3', 'Duze od osamnaest karaktera', 2364, 1600, 8999.99);

book1.stampaj();
book2.stampaj();
book3.stampaj();

console.log(book1.obimna());
console.log(book2.obimna());
console.log(book3.obimna());

console.log(book1.skupa());
console.log(book2.skupa());
console.log(book3.skupa());

console.log(book1.dugackoIme());
console.log(book2.dugackoIme());
console.log(book3.dugackoIme());

let nizKnjiga = [book1, book2, book3];

nizKnjiga.forEach(elem => {
    if(elem.dugackoIme()) {
        console.log(elem._autor);
    }
});
nizKnjiga.forEach(elem => {
    if(elem.skupa() && elem.obimna()) {
        elem.stampaj();
    }
});

function ukupnaCena(nizKnjiga) {
    let sum = 0;
    nizKnjiga.forEach(book => {
        sum += book.cena;
    });
    return sum;
}
console.log(`Ukupna cena knjiga je: ${ukupnaCena(nizKnjiga)} RSD`);

function prosecnaCena(nizKnjiga) {
    let sum = ukupnaCena(nizKnjiga) / nizKnjiga.length;
    return Math.round(sum);
}

console.log(`Prosecna cena knjiga je: ${prosecnaCena(nizKnjiga)} RSD`);

let ukupnoStranica = niz => {
    let sum = 0;
    niz.forEach(book => {
        sum += book.brojStrana;
    });
    return sum;
};

function prosecnaStranica(nizKnjiga) {
    return Math.round(ukupnaCena(nizKnjiga)/ukupnoStranica(nizKnjiga));
}

console.log(`Prosecna cena stranice je: ${prosecnaStranica(nizKnjiga)} RSD`);

// PACIJENT

let pa1 = new PacijentGS('Ana', 173, 65);
let pa2 = new PacijentGS('Mira', 153, 70);
let pa3 = new PacijentGS('Mila', 209, 75);

let pacijenti = [pa1, pa2, pa3];

let minPac = pacijenti[0];
let minTez = pacijenti[0].pTezina;

pacijenti.forEach(e => {
    if(minTez > e.pTezina) {
        minPac = e;
        minTez = e.pTezina;
    }
});

minPac.stampaj();

let maksPac = pacijenti[0];
// let maksBmi = pacijenti[0].bmi();
pacijenti.forEach(elem => {
    if(maksPac.bmi() < elem.bmi()) {
        maksPac = elem;
        // maksBmi = elem.bmi();
    }
});

console.log(`Pacijent sa najvecim BMI je:`)
maksPac.stampaj()

