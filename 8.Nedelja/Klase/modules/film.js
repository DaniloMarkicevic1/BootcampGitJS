export class Film {
    constructor(n, r, gi, o) {
        this.fNaslov = n;
        this.fReziser = r;
        this.najranijaGodina = gi;
        this.fOcene = o;
    }
    stampaj() {
        let p = document.createElement('p');
        document.body.appendChild(p);
        p.innerText = this.naslov;
    }
    prosek() {
        let s = 0;
        let br = this.ocene.length;
        let niz = this.ocene
        this.ocene.forEach(ocene => {
            s += ocene;
        });
        return s/br;
    }
    get fOcene() {
        return this.ocene;
    }
    set fOcene(o) {
        this.ocene = o;
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