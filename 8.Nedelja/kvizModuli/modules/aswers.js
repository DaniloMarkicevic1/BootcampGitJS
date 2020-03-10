// Modul answer.js
let tacniOdgovori = ["B", "A", "B", "B", "B"];

let calculateScore = odgovori => {

    let skor = 0;
    odgovori.forEach((odg, i) => {
        if(odg == tacniOdgovori[i]) {
            skor += 20;
        }
        if(odg.length > 6) {
            skor += 20;
        }
    });
    return skor;

};

export {tacniOdgovori, calculateScore};