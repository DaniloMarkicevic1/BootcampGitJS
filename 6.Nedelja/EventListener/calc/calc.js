let btn = document.querySelectorAll('.broj');
let btoOperacije = document.querySelectorAll('.operacija');

let x = 0;
let y = 0;
let op = '';
let rez = 0;

btn.forEach(elem => {
    elem.addEventListener('click', () => {
        if(x == 0) {
            x = elem.textContent;
        }
        else {
            y = elem.textContent;
        }
    });
});

btoOperacije.forEach(elem => {
    elem.addEventListener('click', () => {
        op = elem.textContent;
        console.log(op);
    });
});


let jednako = document.querySelector('#jednako');

jednako.addEventListener('click', () => {
    x = parseInt(x);
    y = parseInt(y);
    switch(op) {
        case "+":
            rez = x + y;
            break;
        case "-":
            rez = x - y;
            break;
        case "*":
            rez = x * y;
            break;
        case "/":
            rez = x / y;
            break; 
    }
    let paragraf = document.getElementById('rezultat');
    paragraf.innerText = rez;
    rez = 0;
    y = 0;
    x = 0;
});

