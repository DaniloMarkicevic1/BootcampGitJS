let sportista = {
    imePrezime: "PeraPeric",
    visina: 2.04,
    timovi: ['radnicki', 'zvezda', 'partizan']
}
let sportista1 = {
    imePrezime: "AndrijaAndric",
    visina: 1.76,
    timovi: ['arsenal', 'milan', 'partizan']
}
let sportista2 = {
    imePrezime: "MikaMikic",
    visina: 2.10,
    timovi: ['partizan']
}

let nizSportista = [sportista, sportista1, sportista2];

let prosecnaVisina = niz => {
    let sum = 0;

    niz.forEach( sportista => {
        sum += sportista.visina
    });
    return sum / niz.length;
};

console.log(prosecnaVisina(nizSportista));

let igraliZaTim = (niz, tim) => {
    let br = 0;
    niz.forEach( t =>{
        if(t.timovi.includes(tim)) {
            br++;
        }
    });
    return br;
};

console.log(igraliZaTim(nizSportista, 'partizan'));

/*
let najmanjeTransfera = niz => {
    let index = 0;
    let min = t[0].timovi;
    niz.forEach(t, i =>{
        if(min < t.timovi){
            min = t.timovi.length;
            index = i;
        }
    });

    return niz[index].imePrezime;
};
console.log(najmanjeTransfera(nizSportista));
*/


let visiTim = niz => {
    let timPrviParni = [];
    let timDrugiNeparni = [];
    for(i = 0; i < niz.length; i++) {
        if(i % 2 == 0){
            timPrviParni.push(niz[i]);
        }
        else{
            timDrugiNeparni.push(niz[i]);
        }
    }
    if(prosecnaVisina(timPrviParni) > prosecnaVisina(timDrugiNeparni)) {
        console.log('Visa je prva grupa');
    }
    else {
        console.log('Visa je druga grupa');
    }
};

visiTim(nizSportista);

let trenerVidi = niz => {
    br = 0;
    let prviIgrac = niz[0].visina;

    return br;
}
console.log(trenerVidi(nizSportista));
















 
