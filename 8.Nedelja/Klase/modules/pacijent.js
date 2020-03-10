export default class Pacijent {
    constructor($i, $v, $t) {
        this.pIme = $i;
        this.pVisina = $v;
        this.pTezina = $t;
    }
    stampaj() {
        console.log(`Ime Pacijenta: ${this.ime}`);
        console.log(`Visina: ${this.visina}`);
        console.log(`Tezina: ${this.tezina}`);
    }
    bmi() {
        let kg = this.tezina;
        let h = this.visina;
        return Math.round(kg/(h*h));
    }
    kritican() {
        if(this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }
    get pIme() {
        return this.ime;
    }
    set pIme($i) {
        this.ime = $i;
    }
    get pVisina() {
        return this.visina;
    }
    set pVisina($v) {
        if($v < 0) {
            this.visina = 0;
        }
        else if ($v <= 2.5) {
            this.visina = $v
        }
        else {
            this.visina = 2.5;
        }
    }
    get pTezina() {
        return this.tezina;
    }
    set pTezina($t) {
        if($t < 0) {
            this.tezina = 0;
        }
        else if ($t <= 550) {
            this.tezina = $t;
        }
        else {
            this.tezina = 550;
        }
    }
}

