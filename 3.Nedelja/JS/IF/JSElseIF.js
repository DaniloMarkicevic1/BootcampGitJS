// 7. Zadatak
let poeni;

poeni = 66;

if (poeni <= 50) {
    console.log('Pao');
}
else if (poeni <= 60) {
    console.log('Ocena 6');
}
else if (poeni <= 70) {
    console.log('Ocena 7');
}
else if (poeni <= 80) {
    console.log('Ocena 8');
}
else if (poeni <= 90) {
    console.log('Ocena 9');
}
else if (poeni <= 100) {
    console.log('Ocena 10');
}

// 7. Zadatak(2 nacin)

if (poeni > 90) {
    console.log("Ocena 10");
}
else if(poeni > 80) {
    console.log("Ocena 9");
}
else if(poeni > 70) {
    console.log("Ocena 8");
}
else if(poeni > 60) {
    console.log("Ocena 7");
}
else if(poeni > 50) {
    console.log("Ocena 6");
}
else {
    console.log("Nemate dovoljno poena za prelaznu ocenu");
}

// 8 Zadatak

let vreme = new Date();
let dan = vreme.getDay();

console.log(dan);

if (dan == 6) {
    console.log('Weekend');
}
else if (dan == 0) {
    console.log('Weekend');
}
else {
    console.log('Radni dan')
}

// 9. Zadatak
let sat = vreme.getHours();

if (sat >= 18) {
    console.log("dobro vece");
}
else if (sat >= 12) {
    console.log("Dobar Dan");
}
else {
    console.log("Dobro jutro");
}

// 10.Zadatak 
let dan1 = 7;
let mesec1 = 2;
let godina1 = 2020;
let dan2 = 8;
let mesec2 = 2;
let godina2 = 2020;

if (godina1 < godina2) {
    console.log('Prvi datum se prvi desio');
}
else if (godina1 > godina2) {
    console.log("Drugi datum se prvi desio");
}
else if(mesec1 < mesec2) {
    console.log("Prvi datum se prvi desio");
}
else if(mesec1 > mesec2) {
    console.log("Drugi datum se prvi desio")
}
else if(dan1 < dan2) {
    console.log("Prvi datum se prvi desio");
}
else if(dan1 > dan2) {
    console.log("Drugi datum se prvi desio")
}
else {
    console.log("Isti datum");
}

// 11. Zadatak
if (sat < 9) {
    console.log('Zatvoreno');
}
else if (sat > 17) {
    console.log('Zatvoreno');
}
else {
    console.log('Otvoreno')
}

// 12. Zadatak 

let p1 = 9;
let p2 = 12;
let k1 = 17;
let k2 = 21;

/*if((p1 <= p2) && (p2 <= k1)) {
    console.log('Preklapaju se');
}
else if ((p2 <= p1) && (p1 <= k2)) {
    console.log('Preklapaju se');
}
*/
if((p1 <= p2 && p2 <= k1) || (p2 <= p1 && p1 <= k2)) {
    console.log("Smene se preklapaju");
}
else {
    console.log("Smene se NE preklapaju");
}


// 13. Zadatak

let broj;
broj = 46;
if ((broj % 2) == 0) {
    console.log('Paran');
}
else {
    console.log('Neparan');
}

// 14. Zadatak

if ((broj % 3) == 0) {
    console.log("Deljiv sa 3");
}
else{
    console.log('Nedeljiv sa 3');
}

// 15. Zadatak
let a;
let b;
a = 300;
b = 40;

if (a > b) {
    console.log(a - b);
}
else {
    console.log(b - a);
}

// 16.Zadatak

if (broj > 0) {
    console.log(broj++);
}
else {
    console.log(broj--);
}

// 17.Zadatak
a = 1;
b = 3;
c = 2;
let max;
let mid;
let min;

if (a > b && a > c) {
    if (b > c) {
        max = a;
        mid = b;
        min = c;
    }
    else {
        max = a;
        mid = c;
        min = b;
    }
}
else if(b > a && b > c) {
    if (a > c) {
        max = b;
        mid = a;
        min = c;
    }
    else {
        max = b;
        mid = c;
        min = a;
    }
}
else if (c > a && c > b) {
    if (a > b) {
        max = c;
        mid = a;
        min = b;
    }
    else {
        max = c;
        mid = b;
        min = a;
    }
}
console.log(max, mid, min);

//Switch
let boja = "crvena";
switch(boja) {
    case "plava":
        console.log("Odabrali ste plavu boju");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelenu boju");
        break;
    default:
        console.log("Niste odabrali validnu boju");
}

// 18. Zadatak

let danUNedelji;

danUNedelji = 4;

switch(danUNedelji) {
    case 1:
        console.log('Ponedeljak');
        break;
    
    case 2:
        console.log('Utorak');
        break;

    case 3:
        console.log('Sreda');
        break;

    case 4:
        console.log('Cetvrtak');
        break;

    case 5:
        console.log('Petak');
        break;

    case 6:
        console.log('Subota');
        break;

    case 7:
        console.log('Nedelja');
        break;
}

let ocena;

ocena = 5;
switch(ocena) {
    case 1:
        console.log('Nedovoljan');
        break;
    case 2:
        console.log('Dovoljan');
        break;
    case 3:
        console.log('Dobar');
        break;
    case 4:
        console.log('Vr.Dobar');
        break;
    case 5:
        console.log('Odlican');
        break;
}

let unetiBroj;

unetiBroj = 2;

switch(unetiBroj) {
    case 0:
        if (unetiBroj == 0) {
            console.log('Broj je 0');
        }
        break;
    case 2:
        if (unetiBroj == 2) {
            console.log('Broj je 2');
        }
        break;
    case 4:
        if (unetiBroj == 4) {
            console.log('Broj je 4');
        }
        break;
    case 6:
        if (unetiBroj == 6) {
            console.log('Broj je 6');
        }
        break;
    case 8:
        if (unetiBroj == 8) {
            console.log('Broj je 8');
        }
        break;
    case 10:
        if (unetiBroj == 10) {
            console.log('Broj je 10');
        }
        break;
    default: {
        console.log('Unos je pogresan');
    }
}


























