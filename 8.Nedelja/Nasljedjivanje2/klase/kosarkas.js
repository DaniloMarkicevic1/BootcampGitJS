import {Sportista} from "./sportista.js";

export class Kosarkas extends Sportista{
    constructor(i, p, gr, gradr, pts) {
        super(i, p, gr, gradr);
        this.poeni = pts;
    }
    set poeni(pts) {
        this._poeni = pts;
    }
    get poeni() {
        return this._poeni;
    }
    ispisiKosarkasa() {
        console.log(`Kosarkas ${this.ime} ${this.prezime}`);
    }
    prosek() {
        let sum = 0;
        this.poeni.forEach(p => {
            sum += p;
        });
        let avrg = sum / this.poeni.length;
        return avrg;
    }
}