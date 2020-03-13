export class Vozilo {
    constructor(tip, boja) {
        this.tip = tip;
        this.boja = boja ;
    }
    get tip() {
        return this._tip;
    }
    set tip(tip) {
        this._tip = tip;
    }
    get boja() {
        return this._boja;
    }
    set boja(boja) {
        this._boja = boja;
    }
    ispisiVozilo() {
        console.log(`Vozilo: ${this.tip} ${this.boja}`);
    }
    vozi() {
        console.log(`Vozilo u pokretu`);
    }
}