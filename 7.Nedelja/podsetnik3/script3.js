let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('button');
let inputUnos = document.querySelector('#unesi');
/*
liZadaci.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.target.remove();
        console.log('Kliknuto na: li!');
        event.stopPropagation(); ne poziva roditeljski element
    });
});
*/

ulZadaci.addEventListener('click', (e) => {
    // console.log('Kliknuto na UL');
    console.log(e.target.tagName);
    if(e.target.tagName == "LI") {
        e.target.remove();
    }
});

let dodavanjeItema = () => {
    let noviZadatak = document.querySelector('input').value;
    let rbDodajNaPocetak = document.getElementById('dodajNaPocetak');

    if(noviZadatak == '') {
        alert('Unesite nesto');
    }

    else {
    let liNovi = document.createElement('li');
    liNovi.textContent = noviZadatak;
    if (rbDodajNaPocetak.checked) {
        ulZadaci.prepend(liNovi);
    }
    else {
    ulZadaci.append(liNovi);
    }
    }
    //brisanje iz input polja 
    document.querySelector('input').value = '';
};

btnDodaj.addEventListener('click', () => {
    dodavanjeItema();
});

inputUnos.addEventListener('keyup', (e) => {
    //Za enter je "kljuc" br 13.
    if(e.keyCode == 13) {
        dodavanjeItema(); 
    }
});