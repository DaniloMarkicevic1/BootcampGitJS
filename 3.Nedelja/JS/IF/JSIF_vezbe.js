// 1. Zadatak
let a;
let b;

if (a > b) {
    console.log('A je vece od B')
}
else {
    console.log('A je manje od B');
}

// 2. Zadatak
let temp;

temp = 0;
if (temp >= 0) {
    console.log('Temperatura je pozitivna');
}
else {
    console.log('Temperatura je negativna');
}

// 3. Zadatak
let pol = 'z';
let div = document.getElementById('blabla');
if (pol == 'm') {
    console.log('Muski pol');
    div.innerHTML = "<img src='Male.jpg' alt='Muski'>";
}
else {
    console.log('Zenski pol');
    div.innerHTML = "<img src='Female.png' alt='Zenski'>";
}

// 4. Zadatak

let datum = new Date();
let sati = datum.getHours();

if (sati < 12) {
    console.log('Sada je jutro');
}
else {
    console.log('Sada je popodne');
}

// 5. Zadatak

let godina = datum.getFullYear();
let godRodjenja = 2016;
let brojGodina = godina - godRodjenja; 

if (brojGodina > 18) {
    console.log('You pass');
}
else {
    console.log('Vi ste maloletnik');
}

// 6. Zadatak 

let prvi = 23;
let drugi = 50;
let treci = 60;
let max;
if (prvi > drugi) {
    max = prvi;
}
else {
    max = drugi;
}
if (treci > max) {
    console.log(treci);
}
else {
    console.log(max);
}


















