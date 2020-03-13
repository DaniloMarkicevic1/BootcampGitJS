import { Vozilo } from "./vozilo.js";

export class Kamion extends Vozilo {
    // tip, boja, nosivost
    constructor(tip, boja, n) {
        super(tip, boja);
        this.nosivost = n;
    }

    set nosivost(n) {
        this._nosivost = n;
    }
    get nosivost() {
        return this._nosivost;
    }
    ispisiKamion() {
        console.log(`Tip: ${this.tip}, Boja:${this.boja}, Nosivost: ${this.nosivost}`);
    }
}