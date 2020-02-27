/*
// 1.
function hellowWrld() {
    console.log('Hellow Wrld!');
}
hellowWrld();
console.log('* * *');
hellowWrld();
for (let i = 1; i <= 10; i++) {
    hellowWrld();
}

// 2. Funkcija sa prosledjenim jednim parametrom

function ispisi(tekst) {
    console.log(tekst);
}

ispisi("ITButkemp");
ispisi('JavaScript');
tekst = 'ItBuTkeMp';
ispisi(tekst);

let ime = 'Ana';
ispisi(ime);

ispisi(17.3);

// 3.

function ispisKorisnika(ime, prezime, godinaRodjenja) {
    console.log(`Korisnik je ${ime} ${prezime} rodjen ${godinaRodjenja} godine.`);
}

ispisKorisnika("Marko", "Markovic", 2016);

let korisnikIme = 'Mika';
let korisnikPrezime = 'Mikic';
let korisnikGodRodj = 1825;

ispisKorisnika(korisnikIme, korisnikPrezime, korisnikGodRodj);

function zbir(a, b) {
    rez = a + b;
    console.log(rez);
}

zbir(5, 10);

let n = 2;
let m = 7;
zbir(n, m);

// Racunaljka //

function racunaljka(a, b, o) {
    let rez;
    if (o == "+") {
        rez = a + b;
    }
    else if(o == "-") {
        rez = a - b;
    }
    else if(o == "*") {
        rez = a * b;
    }
    else {
        if (b == 0) {
            rez = "nije moguce deliti nulom";
        }
        else{
        rez = a / b;
        } 
    }
    console.log(rez);
}
racunaljka(20, 30, '*');
racunaljka(20, 30, '+');
racunaljka(20, 30, '-');
racunaljka(20, 30, "/");
racunaljka(20, 0, '/');

function saberi(a, b) {
    let rez = a + b;
    return rez;
}
let rezultat = saberi(7, 15);
console.log(rezultat);

let pom = rezultat + 1;
console.log(pom);

let zbir1 = saberi(3, 4);
let zbir2 = saberi(2,7);
let zbir3 = saberi(zbir1, zbir2);// zbir3 = zbir1 + zbir 2;
console.log(`${zbir1} + ${zbir2} = ${zbir3}`);
*/

// 3. Zadatak za vezbanje

function neparan(n) {
    if (n % 2 == 0) {
        return false;
    }
    else {
        return true;
    }
}
let neparan1 = neparan(41);
console.log(neparan1);
// 4. Zadatak 

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
let m = maks2(2,5);
console.log(m);


function maks4(a, b, c, d) {
    let mak1 = maks2(a,b);
    let mak2 = maks2(c,d);
    let mak3 = maks2(mak1, mak2);

    return mak3;
}
m = maks4(1, 5, 7, 16);

console.log(m);

// 5. Zadatak
function slika(link) {
    div.innerHtml = "<img src=" + link + ">";
}

// 9. Zadatak

function sedmiDan(n) {
    let dan = n;
    let pomDan = dan % 7;    
    switch(pomDan) {
        case 0:
            return "Nedelja";
            break;
        case 1:
            return "Ponedeljak";
            break;
        case 2:
            return "Utorak";
            break;
        case 3:
            return "Sreda";
            break;
        case 4:
            return "Cetvrtak";
            break;
        case 5:
            return "Petak";
            break;
        case 6:
            return "Subota";
            break;
        default:
            return "Los Unos";
    }
}

let dan1 = sedmiDan(1);
console.log(dan1);