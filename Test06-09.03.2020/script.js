let korisnickoIme = document.querySelector('#korisnik')
let prviBroj = document.querySelector('#prviBroj');
let drugiBroj = document.querySelector('#drugiBroj');
let izracunaj = document.querySelector('#izracunaj');
let operacija = document.querySelectorAll('[name=operacija]');
let pom = '';


let forma = document.querySelector('form');
forma.addEventListener('submit', (e) => {
    e.preventDefault();

});


izracunaj.addEventListener('click', () => {
    operacija.forEach(e => {
        if(e.checked) {
            pom = `${e.value}`;
        }
    });

    let rezultat = 0;
    let prvi = prviBroj.value;
    let drugi = drugiBroj.value;
    if(pom == '+') {
        rezultat = parseInt(prvi) + parseInt(drugi);
    }
    else if (pom == '-') {
        rezultat = parseInt(prvi) - parseInt(drugi);
    }
    else if (pom == '*') {
        rezultat = parseInt(prvi) * parseInt(drugi);
    }
    else if (pom == '/') {
        if(parseInt(drugi) == 0) {
            rezultat = 0;
        }
        rezultat = parseInt(prvi) / parseInt(drugi);
    }
    parseInt(rezultat);

    let patternKorisnicko = /[a-zA-Z]{5,25}/;

    let test = patternKorisnicko.test(korisnickoIme.value);
    if(!test) {
        alert('Nevalidno korisnicko ime');
    }
    else {
        let div = document.createElement('div');

        document.body.appendChild(div);

        div.innerHTML += `${prviBroj.value} ${pom} ${drugiBroj.value} = ${rezultat} <br> ${korisnickoIme.value} <br>`;
    }
    let div = document.querySelectorAll('div');
    div.forEach(elem => {
        elem.addEventListener('click', e => {
                
                e.target.remove();
                
            });
        });
    forma.reset();
});