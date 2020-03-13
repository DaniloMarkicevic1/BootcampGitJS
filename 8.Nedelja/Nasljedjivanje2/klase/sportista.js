import { Osoba } from "./osoba.js";

export class Sportista extends Osoba {
    constructor(i, p, gr, gradr) {
        super(i, p, gr)
        this.gradRodj = gradr;
    } 
    get gradRodj() {
        return this._gradRodj;
    }
    set gradRodj(gradr) {
        this._gradRodj = gradr;
    }    
}