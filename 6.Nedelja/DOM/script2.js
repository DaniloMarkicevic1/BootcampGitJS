// Parent element
let par = document.querySelector('p');
console.log(par.parentElement); // div
console.log(par.parentElement.parentElement); //body

console.log(par.parentElement.parentElement.parentElement); // html
console.log(par.parentElement.children); // kolekcija svih deteta roditelja paragrafa.

// Braca/Sestre elementi
console.log(par.nextElementSibling);
console.log(par.previousElementSibling);
console.log(par.parentElement.nextElementSibling.children[1].children);
console.log(par.parentElement.parentElement.previousElementSibling);

// par.childred - Kolekcija HTML Tagova(deca paragrafa);
// par.childred[0] - Jedan tag - prvo dete paragrafa
// Za kolekciju je moguce koristiti "for" petlju:
let div = par.parentElement;
let decaDiva = div.children; // Kolekcija

for(let i = 0; i < decaDiva.length; i++) {
    console.log(decaDiva[i]);
}
// Skraceno
for(let i = 0; i < par.parentElement.children.length; i++) {
    console.log(par.parentElement.children[i]);
}
/* Ovaj kod ne radi
par.parentElement.childrenforEach(element => {
    console.log(element);
});
*/ //Ovaj kod ne radi
// Ukoliko zelimo forEach petlju kod koelkcija, moramo kolekciju da konvertujemo u niz
let niz = Array.from(par.parentElement.children)
niz.forEach(element => {
    console.log(element); 
});

let link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.wikipedia.org');
link.innerText = 'Wikipedia';
// Ako vrednost atributa vec postoji, ona se menja
link.setAttribute('id', 'link1');
// Ako ne postoji ona se postavlja.
console.log(link);
console.log(link.getAttribute('href'));

// Dodati svim linkovima target=blank;
let linkovi = document.querySelectorAll('a');
console.log(linkovi);

linkovi.forEach(elem => {
    elem.setAttribute('target','_blank');
});
let slike = document.querySelectorAll('img');

// Sve slike alt=tekst;
slike.forEach(elem => {
    elem.setAttribute('alt', 'Opis slike');
});

// Svi paragrafi style = color purple;
let paragrafi = document.querySelectorAll('p');

paragrafi.forEach(elem => {
    elem.setAttribute('style', 'color:purple');
});

// Parni p u green, neparni u red
for(let i = 0; i < paragrafi.length; i++) {
    if(i % 2 == 0) {
        //paragrafi[i].setAttribute('style', 'color: green');
        //paragrafi[i].setAttribute('style', 'background-color: blue; color: yellow');
        par.style.color = 'green';
        par.style.backgroundColor = 'blue';
        par.style.padding = '15px';
    }
    else {
        paragrafi[i].setAttribute('style', 'color: red');
    }
}
console.log(paragrafi[0].style);

linkovi.forEach((elem, i) => {
    elem.style.padding = '5px';
    elem.style.fontSize = '18px ';
    elem.style.textDecoration = 'none'
    if(i % 2 == 0) {
        elem.style.backgroundColor = 'green';
        elem.style.color = 'purple';
    }
    else {
        elem.style.backgroundColor = 'blue';
        elem.style.color = 'white';
    }
});

paragrafi.forEach((elem, i) => {
    elem.style.padding = '5px';
    elem.style.fontSize = '18px';
    elem.style.textDecoration = 'none'
    if(i % 2 == 0) {
        elem.style.backgroundColor = 'green';
        elem.style.color = 'purple';
    }
    else {
        elem.style.backgroundColor = 'blue';
        elem.style.color = 'white';
    }
});
console.log(par.classList);
par.classList.add('error');

paragrafi.forEach( (par, i) => {
    if(i % 2 == 0) {
        par.classList.add('error');
    }
    else {
        par.classList.add('success');
    }
});

console.log(paragrafi);

paragrafi.forEach( (par, i) => {
    if(i % 3 == 0) {
        par.style.fontSize = '10px';
    }
    else if(i % 3 == 1) {
        par.style.fontSize = '30px';
    }
    else {
        par.style.fontSize = '50px';
    }
});

paragrafi.forEach(par => {
    if(par.textContent.includes('error')) {
        par.classList.add('error');
    }
    else if(par.textContent.includes('success')){
        par.classList.add('success');
    }
});
console.log(paragrafi);