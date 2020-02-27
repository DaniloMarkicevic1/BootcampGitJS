/*
// 0. Ispisati brojeve od 0 do 10 pomocu for Petlje
for (let i = 0; i <= 10; i++) {
    console.log(`Na redu je broj ${i}`);
}
// 1. Ispisati brojeve od 1 do 20
for (let i = 1; i <=20; i++) {
    console.log(`Ispisan: ${i}`);
}
// 2. Ispisati brojeve od 20 do 1
for (let i = 20; i >=1; i--) {
    console.log(`Odnazad ${i}`);
}
// 3. Ispisati parne brojeve od 1 do 20
for (let i = 1; i <=20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// 4. Ispisati dvostruku vrednost brojeva od 5 do 15
for (let i = 5; i <= 15; i++) {
    console.log(i*2);
}
// 5. Odrediti sumu brojeva od 1 do 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
// 6. Odrediti sumu brojeva od 1 do n;
let n = 100;
sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);
// 7. Odrediti sumu brojeva od n do m
n = 50;
let m = 100;
sum = 0;
for (let i = n; i <= m; i++) {
    sum += i;
}
console.log(sum);
// 8. Odrediti proizvod brojeva od n do m
n = 1;
m = 5;
sum = 1;
for (i = n; i <= m; i++) {
    sum *= i;
}
console.log(sum);
// 9. Odrediti sumu kvadrata brojeva od n do m
sum = 0;
n = 1;
m = 3;
for (i = n; i <= m; i++) {
    sum += i**2;
}
console.log(sum);
// 10. Preuzeti sa interneta tri slike
// i imenovati ih 1,2 i 3. 
// For petljom u HTML-u ispisati svaku od slicica
// uz pomoc brojaca(iteratora).

// 11. Sabrati sve brojeve deljive sa 9 u intervalu od 1 do 30
sum = 0;
for (i = 1; i <= 30; i++) {
    if (i % 9 == 0) {
        sum += i;
    }
}
console.log(sum);
// 12. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100;
sum = 1;
for (i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        sum *= i;
        console.log(i);
    }
}
console.log(sum);
// 13. Prebrojati koliko ima brojeva deljivih sa 13
// u intervalu od 5 do 150.
sum = 0;
let br1 = 0;
for (i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        sum++;
    }
    else {
        br1++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${sum} brojeva deljivih sa 13, i ${br1} brojeva koji to nisu`);
// 14. Ispisati aritmeticku sredinu brojeva od n do m.
n = 5;
m = 10;
let sredina = 0;
br = 0;
for (i = n; i <= m; i++) {
    sredina += i;
    br++;
}
sredina = sredina/br; 
console.log(sredina);
// br = m - n + 1;

// 15. Prebrojati koliko brojeva od n do m je 
// pozitivno, a koliko negativno.
n = -7;
m = 13;
let brp = 0;
let brn = 0;
for (i = n; i <= m; i++) {
    if (i < 0) {
        brn++;
    }
    else if (i >= 0) {
        brp++;
    }
}

console.log(`Ima ${brn} negtavnih brojeva, i ${brp} pozitivnih brojeva.`);

// 16. Prebrojati koliko je brojeva od 5 do 50
// koji su deljivi sa 3 ili sa 5.
let deljivi = 0;
for (i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
    deljivi++;
    }
}
console.log(`Od 5 do 50 ima ${deljivi} brojeva koji su deljivi sa njima`);

// 17. Prebrojati i izracunati sumu brojeva
// od n do m kojima je poslednja cifra 4, i parni su
sum = 0;
br = 0;
n = 10;
m = 45;
for (i = n; i <=m; i++) {
    if (i % 10 == 4) {
        sum += i;
        br++;
    }
}
console.log(`Suma brojeva je ${sum}, a ima ih ${br}`);

// 18. Ispisati brojeve od n do m koji su deljivi sa a;
let ispis;
n = 10;
m = 40;
a = 5;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        ispis = i;
        console.log(`${ispis}`);
    }
}

// 21. Proizvod brojeva od n do m koji su deljivi
// sa brojem a;
let proizvod = 1;
n = 11;
m = 30;
a = 10;
for (i = n; i <= m; i++) {
    if (i % a == 0 && i != 0) {
        proizvod *= i;
    }
}
console.log(`${proizvod}`);
*/








/*
// ~.(<=) Sabirati brojeve od 1, tako da ne predjete unetu sumu s.
let s = 15;
i = 1;
let br = 0;
let pom_s = 0;
while (pom_s <= s) {
    pom_s += i;
    i++;
    br++;
}
console.log(br-1);

// ~(<) Pomnoziti brojeve od 1 pa na dalje redom, tako da ne predjete sumu s;

s = 15;
i = 1;
br = 0;
pom_s = 1;

while (pom_s <= s) {
    pom_s *=i;
    i++;
    br++;
}
console.log(br - 1);

*/


// 3 slike naizmenicno \\
/*
let div = document.getElementById('slika');

for (i = 1; i <= 3; i++) {

    div.innerHTML += "<img src=imdzs/" + i + ".jpg>" + "<br>";
}
*/
// 3 slike naizmenicno 2;

let div = document.getElementById('slika');

for (i = 1; i <= 10; i++) {
    if (i % 3 == 1) {
        div.innerHTML += "<img src='1.jpg'>";
    }
    else if (i % 3 == 2) {
        div.innerHTML += "<img src='2.jpg'>";
    }
    else {
        div.innerHTML += "<img src='3.jpg'> ";
    }
}