export class Film {
    constructor(n, r, gi) {
        this.fNaslov = n;
        this.fReziser = r;
        this.najranijaGodina = gi;
    }
    stampaj() {
        let p = document.createElement('p');
        document.body.appendChild(p);
        p.innerText = this.naslov;
    }

    get fNaslov() {
        return this.naslov;
    }
    set fNaslov(n) {
        this.naslov = n;
    }
    get fReziser() {
        return this.reziser;
    }
    set fReziser(r) {
        this.reziser = r;
    }

    get najranijaGodina() {
        return this.godinaIzdanja;
    }
    set najranijaGodina(gi) {
        if(gi > 1800) {
            this.godinaIzdanja = gi;
        }
        else {
            this.godinaIzdanja = 1800;
        }
    }
}