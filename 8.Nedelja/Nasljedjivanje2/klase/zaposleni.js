import { Osoba } from "./osoba.js";

export class Zaposleni extends Osoba {
    constructor(i, p, gr, pl, poz) {
        super(i, p, gr);
        this.plata = pl;
        this.pozicija = poz;
    }
    set plata(pl) {
        this._plata = pl;
    }
    get plata() {
        return this._plata;
    }
    set pozicija(poz) {
        if(poz.includes('Ekonom')) {
            this._pozicija = 'Zaposlen u ekonomskom sektoru';
        }
        else {
            this._pozicija = poz;
        }
    }
    get pozicija() {
        return this._pozicija;
    }
    ispisZaposleni() {
        this.ispisiOsobu()
        console.log(`${this.plata} ${this.pozicija}`);
    }
    natprosecnaPlata(prosek) {
        if(this.plata > prosek) {
            return true;
        }
        else {
            return false;
        }
    }
    ekonomista() {
        if(this.pozicija == 'ekonomista') {
            console.log('Zaposlen u ekonomskom sektoru');
        }
    }
}