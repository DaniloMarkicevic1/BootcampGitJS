// Zadatak 1

let n = 8;
let m = 38;
let brojBrojeva = 0;
let suma = 0;
for (let i = n; i <= m; i++) {
    if(i % 7 == 0 && i % 2 != 0) {
        suma += i;
        brojBrojeva++;
    }

}
console.log(suma);
console.log(brojBrojeva);
console.log(suma*brojBrojeva);

// Zadatak 2

function indeksTelesneMase(tezina, visina) {
    let bmi = tezina / (visina/100)**2;
    return bmi;
}
let tezina = 84;
let visina = 185;
let bmi = indeksTelesneMase(tezina, visina);

if (bmi <= 18.5) {
    console.log('Pothranjenost');
}
else if (bmi > 18.5 && bmi < 24.9) {
    console.log('Normalna tezina');
}
else if (bmi >= 24.9 && bmi <= 30) {
    console.log('Povisena tezina');
}
else {
    console.log('Gojaznost');
}

// Zadatak 3

n = 1;
m = 23;

function razlika(n, m) {

    let zbirParnih = 0;
    let br = 0;

    for (let i = n; i <= m; i++) {

        if(i % 3 == 0 && i % 2 == 0) {
            zbirParnih += i;
        }
    }
    for (let i = n; i <= m; i++) {

        if(i % 10 == 3 || i == 3) {
            br++
        }
    }
    rezultat = zbirParnih - br;
    return rezultat;
}

console.log(razlika(n, m));