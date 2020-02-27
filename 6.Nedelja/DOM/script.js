// Query selektor po imenu taga.
let paragraf = document.querySelector('p');
console.log(paragraf);

let div = document.querySelector('div');
console.log(div);

// Query selektor po imenu klase
let klasaTest = document.querySelector('.test');
console.log(klasaTest);

//Query selektor po imenu klase 2
let klasaTest1 = document.querySelector('p.test');
console.log(klasaTest1);

// Query selektor po id-u
let idTest = document.querySelector('#treci_p');
console.log(idTest);

// Query selektor ALL
let allP = document.querySelectorAll('p');
console.log(allP);
console.log(typeof allP);

// Pristupanje elementu Node list
console.log(allP[0]);

// Kretanje kroz node listu
allP.forEach(elem =>{
    console.log(elem);
});

// Pristupanje elemenata po imenu klase
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

// Neuspelo kretanje forEach petljom kroz HTML kolekciju
/*
klasaTestDoc.forEach( elem =>{
    console.log(elem);
});
*/

// Uspelo kretanje for petljom kroz HTML kolekciju 
console.log(klasaTestDoc[0]);
for(let i = 0; i < klasaTestDoc.length; i++) {
    console.log(klasaTestDoc[i]);
}

// IZMENA TEKSTA NA STRANICI
// InnerText - dodavanje HTML sadrzaja
paragraf.innerText = 'Zdravo,';

// InnerHTML - dodavanje HTML sadrzaja
paragraf.innerHTML += '<span> Kako si? </span>';

// VEZBANJE

// 1. Zadatak Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

allP.forEach(elem => {
    // elem.innerText += ' VAZNO!';
    elem.innerHTML += '<b> VAZNO!!! </b>';
});

let sviDiv = document.querySelectorAll('div');

// 2.Zadatak Svim divovima na stranici dodati po jedan naslov najveće veličine sa proizvoljnim tekstom
sviDiv.forEach( elem => {
    elem.innerHTML += '<h> Proizvoljan tekst</h>';
});

// 3.Zadatak Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu

allP.forEach( ( elem, indeks ) => {
    let kv = ( indeks +1 ) ** 2;
    elem.innerText += ` ${kv}`;
});

//Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati: 
// U jednoj koloni tabele

let imena = ['prvoIme','drugoIme','treceIme'];

allP.forEach((elem,i) => {
    elem.innerText += ` ${imena[i]}`;
});

// U listi kao stavke liste

let lista = document.querySelector('ul');

imena.forEach( elem => {
    let item = `<li>${elem}</li>`;
    lista.innerHTML += item; 
});

// Svako u novom paragrafu

imena.forEach( elem => {
    let item = `<p>${elem}</p>`;
    lista.innerHTML += item; 
});
231