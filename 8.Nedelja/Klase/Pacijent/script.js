import {PacijentGS} from "./pacijent_gs";

let pa1 = new PacijentGS('Ana', 173, 65);
let pa2 = new PacijentGS('Mira', 153, 70);
let pa3 = new PacijentGS('Mila', 209, 75);

let pacijenti = [pa1, pa2, pa3];

let minPac = pacijenti[0];
let minTez = pacijenti[0].pTezina;

pacijenti.forEach(e => {
    if(minTez > e.pTezina) {
        minPac = e;
        minTez = e.pTezina;
    }
});
pa1.stampaj();
