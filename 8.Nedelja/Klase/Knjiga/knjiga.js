export class Knjiga {
    constructor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c;
    }
    // seteri
    set naslov(n) {
        this._naslov = n;
    }
    set autor(a) {
        this._autor = a;
    }
    set godIzdanja(gi) {
        this._godIzdanja = gi;
    }
    set brojStrana(bs) {
        if(bs < 0) {
            this._brojStrana = 0;
        }
        else {
            this._brojStrana = bs;
        }
    }
    set cena(c) {
        if(c < 0) {
            this._cena = 0;
        }
        else {
            this._cena = c;
        }
    }
    // geteri
    get naslov() {
        return this._naslov;
    }
    get autor() {
        return this._autor;
    }
    get godIzdanja() {
        return this._godIzdanja;
    }
    get brojStrana() {
        return this._brojStrana;
    }
    get cena() {
        return this._cena;
    }
    stampaj() {
        console.log(`Knjiga: ${this.naslov}, Autor: ${this.autor}, Godina Izdanja: ${this.godIzdanja}, Broj Strana: ${this.brojStrana}, Cena: ${this.cena} RSD`);
        
    }
    obimna() {
        if(this.brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }
    skupa() {
        if(this.cena > 8000) {
            return true;
        }
        else {
            return false;
        }
    }
    dugackoIme() {
        if(this.autor.length > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}

