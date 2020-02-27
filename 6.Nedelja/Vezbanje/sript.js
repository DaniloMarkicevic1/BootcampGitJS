let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 11.4, 4.5, 2.4];

let dan = {
    datum: "2020/02/04",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [-2, 3, 7, 12, 12, 6, 2, -1],
    // Prosek temperature
    prosek: function() {
        let temp = this.temperature;
        let sum = 0;
        temp.forEach( t => {
            sum += t;
        });
        let p = sum / temp.length;
        return p;
    },
    // BR natprosecnih temperatura
    brojNatprosek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let br = 0;
        temp.forEach( t => {
            if (t > p) {
                br++;
            }
        });
        return br;
    },
    //BR merenja sa maksimalnom temperaturom
    brojMaksimalnih: function() {
        let temp = this.temperature;
        let max = temp[0];
        for (let i = 1; i < temp.length; i++) {
            if (temp[i] > max) {
                max = temp[i];
            }
        }
        let br = 0;
        temp.forEach( t=> {
            if(t == max) {
                br++;
            }
        });
        return br;
    },
    // 2 parametra = 2 temperature, br merenja izmedju njih 2
    brojIzmedju: function(t1, t2) {
        if(t1 > t2) {
            [t1, t2] = [t2, t1];
        }
        let temp = this.temperature;
        let br = 0;
        temp.forEach( t => {
            if(t >= t1 && t <= t2) {
                br++;
            }
        });
        return br;
    },
    // Proverava da li je u većini dana temperatura bila iznad proseka ili ne.

    iznadProsek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let brIznad = 0;
        let brIspod = 0;
        temp.forEach( t => {
            if(t >= p) {
                brIznad++;
            }
            else {
                brIspod++;
            }
        });
        if (brIznad > brIspod) {
            return true;
        }
        else {
            return false;
        }
    },
    // Da li je dan leden
    ledenDan: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length; i++){
            if (temp[i] >= 0) {
                console.log(temp[i]);
                return false;
            }
        };
        return true;
    },
    tropskiDan: function() {
        let temp = this.temperature;
        let tropski = true;
        temp.forEach( t => {
            if(t < 24) {
                tropski = false;
            }
        });
        return tropski;
    },
    meteropate: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length-1; i++) {
            if(Math.abs(temp[i + 1] - temp[i]) > 8) {
                return true;
            }
        }
        return false;
    },
    neuobicajen: function() {
        let temp = this.temperature;
        let kisa = this.kisa;
        let oblacno = this.oblacno;
        let sunce = this.sunce;
        let neuobicajen = false;
        temp.forEach( t =>{
            if(kisa && t < -5 || oblacno && t > 25) {
                neuobicajen = true;
            }
        });
        if(kisa && oblacno && sunce) {
            neuobicajen = true;
        }
        return neuobicajen;
    },
    iznadProsekZaMesec: function() {
        let mesecString = this.datum.substr(5, 2);
        // console.log(mesecString);
        let mesecCeoBroj = parseInt(mesecString);
        // console.log(mesecCeoBroj);
        let p = prosek[mesecCeoBroj - 1];
        //prosecna temp za mesec
        let p1 = this.prosek();
        if(p1 > p) {
            return true;
        }
        else {
            return false;
        }
    }
};



console.log(dan.temperature);

console.log(dan.prosek());

console.log(dan.brojNatprosek());

console.log(dan.brojMaksimalnih());

console.log(dan.brojIzmedju(5, 12));

console.log(dan.brojIzmedju(12, 5));

console.log(dan.iznadProsek());

console.log(dan.ledenDan());

console.log(dan.tropskiDan());

console.log(dan.meteropate());

console.log(dan.neuobicajen());

console.log(dan.iznadProsekZaMesec());

let dan1 = {
    datum: "2020/11/16",
    kisa: true,
    oblacno: false,
    sunce: true,
    temperature: [-2,1,3,7,11,11,5,7,9,10]
};
let dan2 = {    
    datum: "2020/7/16",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [-2,1,3,7,11,11,5]
};
let dan3 = {
    datum: "2020/4/16",
    kisa: false,
    oblacno: false,
    sunce: true,
    temperature: [-2,1,3,7,11,11,5,5,4,1]
}

let merenjaDani = [dan1,dan2,dan3];

let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => {
        if(dan.temperature.length > max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
};

prviNajviseMerenja(merenjaDani);

let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => {
        if(dan.temperature.length >= max) {
            max = dan.temperature.length;
            index = i;
        }
    });
    console.log(dani[index].datum);
};

poslednjiNajviseMerenja(merenjaDani);