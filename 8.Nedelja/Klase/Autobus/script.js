import {Autobus} from './autobus.js';

let a1 = new Autobus('NI - 213', 20);
let a2 = new Autobus('BG - 113', 18);
let a3 = new Autobus('AL - 313', 19);

let autobus = [a1, a2, a3];

autobus.forEach(a => {
    a.stampaj();
});

let ukupnoSedista = nizA => {
    let ukupno = 0;
    nizA.forEach(a => {
        ukupno += a.brSedista;
    });
    return ukupno;
};
console.log(ukupnoSedista(autobus));
let maksSedista = nizA => {
    let maksS = autobus[0];
    nizA.forEach(a => {
        if(a.brSedista > maksS.brSedista) {
            maksS = a;
        }
    });
    maksS.stampaj();
};
maksSedista(autobus);

let ljudi = (brLjudi,nizA) => {
    if(brLjudi <= ukupnoSedista(nizA)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ljudi(40,autobus));

