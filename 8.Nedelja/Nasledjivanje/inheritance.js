import {Vozilo} from "./modules/vozilo.js";
import {Automobil} from "./modules/automobil.js";
import {Kamion} from "./modules/kamion.js";

let v1 = new Vozilo('drumsko', 'crvena');
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil('drumsko','plava', 'Ni - 111 a')
a1.ispisiVozilo();
a1.vozi();
console.log(a1.boja);

a1.ispisiAutomobil();
// v1.ispisiAutomobil(); Ne radi jer roditeljska klasa ne nasljedjuje propertije i metode iz Podklase.
let k1 = new Kamion('drumsko', 'sivi', 4);

k1.ispisiKamion();



















