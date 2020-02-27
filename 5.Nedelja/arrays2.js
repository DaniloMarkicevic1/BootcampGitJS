// 17.Zadatak

let nizTimova = ['Tim A', 'Tim B', 'Tim C'];

let tabela = "<table>";

for (let i = 0; i < nizTimova.length; i++) {
    tabela += `<tr><td> ${nizTimova[i]} </td></tr>`;
}

tabela += "</table>";

let divTabela = document.getElementById('tabela');

divTabela.innerHTML = tabela;

<table>
    <tr><td>Tim A</td></tr>
    <tr><td>Tim B</td></tr>
    <tr><td>tim C</td></tr>
</table>


// U tabeli u istom redu.

<table>
    <tr><td>Tim A</td></tr>
</table>


tabela = "<table><tr>";
for (let i = 0; i < nizTimova.length; i++) {
    tabela += `<td> ${nizTimova[i]} </td>`;
}

tabela += "</tr></table>"

divTabela = document.getElementById('tabela2');

divTabela.innerHTML = tabela;

// 18.Zadatak
/*
    <img src="...">
    <img src="...">
    <img src="...">
*/
let nizSlika = ['Nula.webp', 'Jedan.webp', 'Dva.jpg'];

let slike = "";

for (let i = 0; i < nizSlika.length; i++) {
    slike += `<img src = "${nizSlika[i]}" alt = "slika"><br>`;
}

let divSlika = document.getElementById('slike');

divSlika.innerHTML = slike;



// Stringovi i njihovi metodi

let str = 'Zdravo svete!';

//duzina stringa - .length

console.log(str.length);

// Da li string sadrzi neki karakter - .includes

console.log(str.includes("v"));

if (str.includes('o')) {
    console.log('String sadrzi slovo o');
}
else {
    console.log('Ne sadrzi o');
}

//Da li sadrzi karakter na specificnoj poziciji
console.log(str.includes('Z', 2));

// Indeks prvog karaktera koga trazimo; - indexOf

console.log(str.indexOf('e'));

console.log(str.lastIndexOf('e'));

// Da li je neko slovo prvo, ili poslednje - startsWith,endsWith

console.log(str.startsWith('Z'));

console.log(str.endsWith('?'));

//

// 19.
 
for (let i = 0; i < nizSlika.length; i++) {
    console.log(nizSlika[i].length);
}

nizSlika = ['Nula.webp', "N", "N", 'Jedan.webp', 'Dva.jpg'];

// 20. 
let najveci = nizSlika[0].length;
for (let i = 0; i < nizSlika.length; i++) {
    if (najveci < nizSlika[i].length) {
        najveci = nizSlika[i].length;
    }
}
console.log(najveci);

// 20. Arrow

let najduzaRec = nizSlika => {
    let najveci = nizSlika[0].length;
    let maxRec = nizSlika[0];
    for (let i = 0; i < nizSlika.length; i++) {
        if (najveci < nizSlika[i].length) {
            najveci = nizSlika[i].length;
            maxRec = nizSlika[i];
        }
    }
    return maxRec;
}

console.log(najduzaRec(nizSlika));

// 21
let avrg = 0;
let br = 0;
for (let i = 0; i < nizSlika.length; i++) {
    avrg += nizSlika[i].length;
}
console.log(avrg/nizSlika.length);

let avrgfunkcija = nizSlika => {
    let avrg = 0;
    let br = 0;
    for(let i = 0; i < nizSlika.length; i++) {
        avrg += nizSlika[i].length;
    }
    return avrg/nizSlika.length;
}
console.log(avrgfunkcija(nizSlika))



let natprosecnoDug = niz => {
    let ar = avrgfunkcija(niz);
    let br = 0;
        for (let i = 0; i < niz.length; i++) {
        if (ar < niz[i].length) {
            console.log(niz[i]);
            br++;
        }
    }
    return br;
}
natprosecnoDug(nizSlika);

let brnatprosecnoDug = niz => {
    let ar = avrgfunkcija(niz);
    let br = 0;
        for (let i = 0; i < niz.length; i++) {
        if (ar < niz[i].length) {
            br++;
        }
    }
    return br;
}

console.log(brnatprosecnoDug(nizSlika));

// slice - odakle poceti(od koje poz) podstring , gde zavrsiti(do koje poz) podstring
let str = "Zdravo svete!"
console.log(str.slice(3, 4));

// substr - odakle poceti(koje pozicije) podstring, koliko elemenata od te pozicije na dalje uzeti.
console.log(str.substr(3, 5));

// replace 

console.log(str.replace('dra', 'w'));

// 22.
// nizSlika = ['Nula.webp', 'Jedan.webp', 'Dva.jpg'];

let slovoA = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < nizSlika.length; i++) 
        if (niz[i].includes(slovo)) {
            br++
        }
    return br;
}

console.log(slovoA(nizSlika, 'jpg'));

let pocinjeSlovom = (niz, slovo) => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].startsWith(slovo.toUpperCase() || niz[i].startsWith(slovo.toLowerCase()))) {
            br++;
        }
    }
    return br;
}

console.log(pocinjeSlovom(nizSlika, "n"));
// 24

let c = [];
let a = [2, 6, 7];
let b = [2, 6, 7];
for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
}

console.log(c);

c = [];
for (let i = 0; i < a.length; i++) {
    c.push(a[i] * b[i]);
}

console.log(c);
a = [2, 4 , 6, 12, 10, 14];
//   0, 1 , 3, 4, 5 , 6, ;
b = [];
n = a.length/2;
for (let i = 0; i < n; i++) {
    let i_pom = a.length - i - 1;
    b.push((a[i]+a[i_pom])/2);
    console.log(a[i].length);
}
// a = [2, 6, 7, 4];
console.log(b);

