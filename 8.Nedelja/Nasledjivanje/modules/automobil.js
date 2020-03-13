import {Vozilo} from "./vozilo.js";

export class Automobil extends Vozilo {
    constructor(tip, boja, rb) {
        super(tip, boja);
        this.regBr = rb;
    }

    set regBr(rb) {
        this._regBr = rb;
    }

    get regBr() {
        return this._regBr;
    }

    ispisiAutomobil() {
        console.log(`Automobil: ${this.tip}, Boja: ${this.boja}, RegBr: ${this.regBr}`);
    }
}