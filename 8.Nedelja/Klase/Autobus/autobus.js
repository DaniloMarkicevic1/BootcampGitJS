export class Autobus {
    constructor(regBr, brSed) {
        this.regBroj = regBr;
        this.brSedista = brSed;
    }
    get regBroj() {
        return this._regBroj;
    }
    get brSedista() {
        return this._brSedista;
    }
    set regBroj(regBr) {
        this._regBroj = regBr;
    }
    set brSedista(brSed) {
        this._brSedista = brSed;
    }
    stampaj() {
        console.log(`Registracija: ${this.regBroj}| Broj Sedista:${this.brSedista}`);
    }
}