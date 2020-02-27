//
let suma = function(a, b) {
    let s = a + b;
    return s;
}

console.log(suma(15, 36));
console.log(suma(9, 4));
//
let suma2 = (a, b) => {
    let s = a + b;
    return s;
}

console.log(suma2(1, 7));
//
let hello = () => {
    console.log("Hello World!");
}

hello();
//
let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}

echo('Pera', 'Peric');
echo('Laza', 'Lazic');
// 3.

let neparan = (n) => {
        if(n % 2 != 0) {
            return true;
        }
        else {
            return false;  
        }

}

// 4. 
let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let maks4 = (a, b, c, d) => {
    let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    let m3 = maks2(m1, m2);
    return m3;
}
console.log(maks4(2, 6, 21, 64));

// 10.

let deljivSaTri = (n, m) => {
    br = 0;
    ispis = "";
    for (i = n; i <= m; i++) {
        if(i % 3 == 0) {
            ispis += i + " ";
            br++;
        }
    }
    console.log(`${ispis}`);
    console.log(`${br}`);
}
deljivSaTri(2, 9);

// 5.

let slika = (putanja) => {
    return `<img src="${putanja}" alt='blabla'>`;
}

// 1)Telo arow funkcije se sastoji samo od return naredbe

let slika1 = (putanja) => `<img src="${putanja}"alt='blabla'>`;

let div = document.getElementById('blabla');
div.innerHTML = slika1('download.jpg');

// 2) Ako prima 1 parametar;
let slika4 = putanja => `<img src="${putanja}"alt='blabla'>`;

div = document.getElementById('blabla');
div.innerHTML = slika4('download.jpg');