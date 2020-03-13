import { Osoba } from "./klase/osoba.js";
import { Zaposleni } from "./klase/zaposleni.js";
import { prosekPlate } from "./klase/plate.js";
import { Sportista } from "./klase/sportista.js";
import { Kosarkas } from "./klase/kosarkas.js";

let osoba1 = new Osoba('Dan', 'Mark', 1994);
let zaposleni1 = new Zaposleni('Mitar','Miric', 2000, 98000, 'ekonomista');
let zaposleni2 = new Zaposleni('Mitar','Miric', 1999, 34000, 'Ekonomista');
let zaposleni3 = new Zaposleni('Mitar','Miric', 1998, 20000, 'Ekonomista');
osoba1.ispisiOsobu();

zaposleni1.ispisZaposleni();
zaposleni2.ispisZaposleni();
zaposleni3.ispisZaposleni();
console.log(zaposleni1.natprosecnaPlata());
zaposleni1.ekonomista();
let zaposleni = [zaposleni1, zaposleni2, zaposleni3];

console.log(prosekPlate(zaposleni));

console.log(zaposleni1.natprosecnaPlata(prosekPlate(zaposleni)));

let k1 = new Kosarkas('Sportista1', 'Jedan', 1987, 'Nis', [1, 1, 1, 1, 1, 1, 70]);
let k2 = new Kosarkas('Sportista2', 'Dva', 1987, 'Nis', [1, 1, 1, 1, 1, 1]);
let k3 = new Kosarkas('Sportista3', 'Tri', 1987, 'Nis', [1, 1, 1, 1, 3, 7]);

let kosarkasi = [k1, k2, k3];
let najviseUtakmica = kosarkasi => {
    let max = kosarkasi[0].poeni.length;
    let igrac = kosarkasi[0]
    kosarkasi.forEach(k => {
        if(k.poeni.length > max) {
            max = k.length;
            igrac = k;
        }
    });
    igrac.ispisiKosarkasa()
};
najviseUtakmica(kosarkasi);

let najvisePoena = kosarkasi => {
    let max = 0;
    let igrac;
    kosarkasi.forEach(e => {
        let sum = 0;
        e.poeni.forEach(p => {
            sum += p;
        });
        if(sum > max) {
            max = sum;
            igrac = e;
        }
    });
    igrac.ispisiKosarkasa();
};
najvisePoena(kosarkasi);

let najviseProsecnoPoena = kosarkasi => {
    let pomIgrac = kosarkasi[0].prosek();
    let igrac;
    kosarkasi.forEach((k, i) => {
        if(k.prosek() > pomIgrac) {
            igrac = kosarkasi[i];
            pomIgrac = kosarkasi[i].prosek();
        }
    });
    igrac.ispisiKosarkasa();
};

najviseProsecnoPoena(kosarkasi);