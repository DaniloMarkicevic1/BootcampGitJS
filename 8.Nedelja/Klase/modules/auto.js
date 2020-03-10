class Auto {
    // Polja: marka, boja, imaKrov.
    // Konstruktor:
    constructor(m, b, ik) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = ik;
    }
    sviraj() {
        // this - objekat koji je pozvao metodu.
        let m = this.marka;
        console.log(`${m} svira 'Beep! Beep!'`);
    }
    get aMarka() {
        return this.marka;
    }
    set aMarka(m) { // Geter - u klasi je metoda.
        if(m.includes("Citroen")) {
            console.log('Nedozvoljeno');
        }
        else {
            this.marka = m;  // Seter - u klasi je takodje metoda.
        }
    }
    
    get aBoja() {
        return this.boja;
    }
    set aBoja(b) {
        this.boja = b;
    }

    get aImaKrov () {
        return this.imaKrov;
    }
    set aImaKrov (ik) {
        this.imaKrov = ik;
    }
}

export default Auto;