/*
let cars = ["Volvo", "BMV", "Opel"];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

cars[1] = "Ford";

console.log(cars);

test = [6.07, "Sreda", -9, false];

console.log(test);

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i]);
}

for (let i = cars.length -1; i >= 0; i--) {
    console.log(cars[i]);
}

// 2) 


let  niz = [3, 7, -12, 19, 20, -4, 5, 16, -17];
let suma = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
console.log(suma);

// 3)


suma = 1;
for (let i = 0; i < niz.length; i++) {
    suma *= niz[i];
}
console.log(suma);


// 4)


suma = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
if (niz.length == 0) {
    srvr = 0;
}
else {
    avrg = suma/niz.length;
}

console.log(suma);
console.log(avrg);


// 5)


niz = [3, 7, -12, 19, 32, 20, -4, 5, 16, -17];

let max = niz[0];
for (let i = 1; i < niz.length; i++) {
    if (max < niz[i]) {
        max = niz[i]; 
    }
}

console.log(max);


// 6)

niz = [3, 7, -12, 19, 20, -4, 5, 16, -17];

let min = niz[0];
for (let i = 1; i < niz.length; i++) {
    if (min > niz[i]) {
        min = niz[i]; 
    }
}

console.log(min);
// 6) arrow funk

let minarrow = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i]; 
        }
    }
    return min;
}
console.log('Min');
console.log(minarrow([2,4,1,-4,6,8,20,-15,202]));
// 7) 



niz = [3, 7, -12, 19, 20, -4, 5, 16, -17];

let maxArrow = niz => {
    let max = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            index = i; 
        }
    }
    return index;
}
console.log(maxArrow(niz));
console.log(maxArrow([3, 7, -12, 19, 20, -4, 5, 16, -17]));

// 10. Arrow funk,koja vraca br elem, celobrojnog koji su veci od srednje vrednosti;
let niz = [3, 7, -12, 19, 20, -4, 5, 1, 6, -17];

let arSr = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma / niz.length;
}
let brSrednjaVrednost = niz => {
        let broj = 0;
        let srvr = arSr(niz);
        for (let i = 1; i < niz.length; i++) {
            if(niz[i] > srvr) {
                broj++;
            }         
    }
    return broj;
}

console.log(brSrednjaVrednost(niz));

// 11

let zbirPoz = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(zbirPoz(niz));
// 12.


let brPar = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brPar(niz));

// 13.


let brPar2 = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brPar2(niz));

// 14.

let promeniZnak = niz => {
    for(let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }
}

promeniZnak(niz);

console.log(niz);

// 16. Formirati UL listu.


let ulLista = niz => {
    //Elementi niza su stringovi
    let result = "";
    result += "<ul>";
    for ( let i = 0; i < niz.length; i++) {
        result += `<li>${niz[i]}</li>`;
    }
    result += "</ul>";
    return result;
}
let div = document.getElementById('blabla');

div.innerHTML = ulLista(["Jaja", "Mleko", "Jogurt"]);

*/