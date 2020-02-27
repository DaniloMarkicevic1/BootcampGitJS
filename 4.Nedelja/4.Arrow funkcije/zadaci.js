function suma(n, m) {
    if (n > m) {
        return 0;
    }
    let s = 0;
    for (i = n; i <= m; i++) {
        s += i;
    }
    return s;
    
}

let p = suma(6, 12);
console.log(p);
p = suma(1, 9);
console.log(p);
console.log(suma(5, 18));
console.log(suma(7, 2));

// 12. Zadatak

function mnozi(n, m) {
    sum = 1;
    for (let i = n; i <= m; i++) {
        sum *= i;
    }
    return sum;
}
console.log(mnozi(3, 6));

// 13. Zadatak

function arsr(n, m) {
    let br = 0;
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
        br++;
    } 
    return sum / br;
}
console.log(arsr(100, 200));

// 14. Zadatak

let arisred = (n, m) => {
    let br = 0;
    let sum = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            sum += i;
            br++;
        }
    }
    if (br > 0) {
        return sum / br;
    }
    return 0;
}

console.log(arisred(1, 10));

console.log(arisred(6, 9));

// 10. Zadatak

function deljivSaTri(n, m) {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            br++;
            //console.log(`Brojevi koji su deljivi sa 3 : ${i}`);
        }
    }
    //console.log(`Ukupno ih ima:${br}`);
    return br;
}

let func = (deljivSaTri(5, 14));

let a = 5;
let b = 14;

console.log(`Broj brojeva deljivih sa 3 je: ${deljivSaTri(a, b)}`);
console.log("Broj brojeva deljivih sa 3: je " + func);

// 5. Zadatak
/*
function slika(putanja) {
    return `<img src='` + putanja + `' alt = 'Blabla'>`;
} 
*/
function slika(putanja) {
    return `<img src="${putanja}" alt ="Blabla">`;
}

let elem = document.getElementById('blabla');

elem.innerHTML = slika('images/jaje.jpg');

console.log(elem.innerHTML);

elem.innerHTML += slika('images/jaje.jpg');

// 7.

function bojaP(boja, tekst) {
    return `<p style='color: ${boja}'>Neki tekst.....</p>`
}

elem.innerHTML += bojaP('red');
elem.innerHTML += bojaP('blue');

// 8.

function p2(boja, tekst) {
    return `<p style="color: ${boja}">${tekst}</p>`
}

elem.innerHTML += p2('green', 'neki tekst')
elem.innerHTML += p2('yellowgreen', 'Neki drugi tekst');

function p3(font, tekst) {
    return `<p style="font-size: ${font + "px"}">${tekst}</p>`;
}

elem.innerHTML += p3(40, 'asdasdsadasd');
elem.innerHTML += p3(24, 'asdassd');

function x5p() {
    let res = "";
    for (i = 1; i <= 5; i += 1){
        let j = i * 10;
        res += `<p style='font-size: ${j}px'>Neki text</p>`
    }
    return res;
}

elem.innerHTML += x5p();