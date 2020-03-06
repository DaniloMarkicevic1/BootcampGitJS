let forma = document.querySelector('#login-form');
let inputUsername = document.querySelector('#username');
let btnSubmit = document.querySelector('#submit');
let divGreska = document.querySelector('#greska');
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;
// inputUsername, ili pristup preko forme, forma.username(form.id ili form.name);
forma.addEventListener('submit', (e) => {
    e.preventDefault();
    // let pattern = /^zdravo$/; // Da li sadrzi rec zdravo
    let username = inputUsername.value;

    if(patternUsername.test(username)) {
        divGreska.textContent = 'Podaci ispravno uneti :-).' + 'Vas username je: ' + username;;
    }
    else {
        divGreska.textContent = 'Podaci neispravno uneti :-( (Slova, Brojevi, >5 char, <15 char)';
    }
});

inputUsername.addEventListener('keyup', (e) => {

    if(patternUsername.test(inputUsername.value)) {
        inputUsername.setAttribute('class', 'success');
    }
    else {
        inputUsername.setAttribute('class', 'error');
    }
});