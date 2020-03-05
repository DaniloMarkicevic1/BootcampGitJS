let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let timer;


btn1.addEventListener('click', () => {
    timer = setTimeout(() => {console.log('Zdravo!')},1000*2);

});

btn2.addEventListener('click', () => {
    clearTimeout(timer);
});

let div = document.getElementById('result');
let btn3 = document.getElementById('btn3');
let br = 200;

let timer1;
let timer1IsSet = false;

btn3.addEventListener('click', () => {
    if(!timer1IsSet) {
        timer1IsSet = true;
        clock = setInterval(() => {
            br--;
            div.innerHTML = `${br}`
        }, 1000);
    }
});

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    clearTimeout(clock);
    timer1IsSet = false;
});

let sat = document.querySelector('#sat');

setInterval(function() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sec = datum.getSeconds();
    if(sati < 10) {
        sati = '0' + sati;
    }
    if(minuti < 10) {
        minuti = '0' + minuti;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }
    sat.innerHTML = `Sati (${sati}: ${minuti}: ${sec} PM)`;
}, 1000);

