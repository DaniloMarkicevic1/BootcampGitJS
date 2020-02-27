let blog1 = {
    title: 'Blog 1!',
    content: 'Tekst 1',
    likes: 0,
    dislikes: 50
};
console.log(blog1);

let blog2 = {
    title: 'Blog 2!!',
    content: 'Tekst 2',
    likes: 20,
    dislike: 20
};

console.log(blog2);
let blog3 = {
    title: 'Blog 3?',
    content: 'Tekst 3',
    likes: 5,
    dislikes: 50
};

console.log(blog3);

let user = {
    username: 'JohnDoe',
    age: 30,
    blogs:['Naslov1', 'Naslov2', 'Naslov3'],
    login: function() {
        console.log('Ulogovani ste');
    },
    logBlog: function(){
        console.log(this.blogs);
        this.blogs.forEach( b => {
            console.log(b);
        });
    }
}

// Poziv metoda
user.login();

let arrBlogs = user.blogs;

// Ispis niza blogova.

for (let i = 0; i < arrBlogs.length; i++) {
    console.log(`Naslov bloga je: ${arrBlogs[i]}`);
}

// forEach petlja.

arrBlogs.forEach(blog => {
    console.log(`Naslov je ${blog}`);
});

user.blogs.forEach(blog => {
    console.log(blog);
});

//Poizv unutar metoda.

user.logBlog();

console.log(this);
// Niz objekta

let blogs = [blog1, blog2, blog3];
// Iteracija for petljom nizom objekata

for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i].title);
}

//Ispisivanje celih objekata

blogs.forEach( blogs => {
    console.log(blogs);
});

// Iteracija forEach nizom objekata - ispisivanje naslova

console.log(blog1.title);

blogs.forEach( blogs => {
    console.log(blogs.title);
});


let ukupnoLajkova = blogs => {
    let ukupno = 0;

    blogs.forEach( elem => {
    ukupno += elem.likes;
});

return ukupno;
};

console.log(ukupnoLajkova(blogs));


// Arrow funk, niz objekata, return avrg br lajkova.

let prosecnoLajkova = niz => {
    let ukupno = ukupnoLajkova(niz);
    let br = niz.length;
    let avrg = ukupno / br;
    return avrg;
};

console.log(prosecnoLajkova(blogs));

// Arrow funk, (niz objekata), naslovi blogova koji imaju vise + nego - ocena

let visePozitivnih = niz => {
    niz.forEach(elem => {
        let poz = elem.likes;
        let neg = elem.dislikes;
        if (poz > neg) {
            console.log(elem.title);
        }
    });
};

visePozitivnih(blogs);

// arrow funk, (niz) sve naslove, koji se zavrsavaju uzvicnikom

let uzvicnik = blogs => {

    blogs. forEach( blog => {
        let naslov = blog.title;
        if(naslov.endsWith("!")) {
            console.log(naslov);
        }
    });
};

uzvicnik(blogs);

let user1 = {
    username: "Ime1-I-Prezime1",
    age: 25,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach( b => {
            console.log(b);
        });
    },
    logTitleBlogs: function() {
        this.blogs.forEach( b => {
            console.log(b.title);
        });
    }
};
console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

let user2 = {
    username: "Ime2-I-Prezime2",
    age: 16,
    blogs: [blog1, blog2]
};
console.log(user2);

let user3 = {
    username: "Ime3-I-Prezime3",
    age: 20,
    blogs: [blog1, blog3]
};
console.log(user3);
console.log(user1);
//Niz korisnika

let users = [user1, user2, user3];

users.forEach( b => {
    let god = b.age;
    if(god < 18) {
        console.log(b.username);
    }
});

let ispis = users => {
    users.forEach( b => {
        let god = b.age;
        if ( god < 18) {
            console.log(b.username);
        }
    });
};
ispis(users);

// Blogovi sa vise od 50 lajkova;

let popularniBlogovi = korisnici => {
    korisnici.forEach( k => {
        let nizBlogova = k.blogs;
        nizBlogova.forEach( b => {
            let lajkovi = b.likes;
            if(lajkovi > 50) {
                console.log(b.title);
            }
        });
    });
}
popularniBlogovi(users);

let blogoviAutora = (korisnici, ime) => {
    korisnici.forEach( k =>{
        // Ako je korisnik ime i prezime1;
        if(k.username == ime) {
            let nizBlogova = k.blogs;
            nizBlogova.forEach( b => {
                console.log(b.title);
            });
        }
    });
};

blogoviAutora(users,'Ime2-I-Prezime2');
blogoviAutora(users, 'MikaMikic');

// autori, vise od 100 lajkova;

let popularniAutori = autori => {

    autori.forEach( a => {
        let nizBlogovi = a.blogs;
        let sumLikes = 0; // Pojedinacni korisnici
        nizBlogovi.forEach( b => {
        sumLikes += b.likes;
        });
        if(sumLikes > 300) {
            console.log(a.username);
        }
    });
};
popularniAutori(users);

let popularniAutori2 = autori => {
    
    autori.forEach( a => {
        let nizBlogovi = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogovi);
        if(sumLikes > 300) {
            console.log(a.username);
        }
    });
};

popularniAutori2(users);

// zad


let prosecnoDislajkova = niz => {
    let ukupno = 0;
    niz.forEach(x => {
        ukupno += x.dislikes;
    });
    let broj = niz.length;
    let avg = ukupno / broj;
    return avg;
};

let superBlog = niz => {

    let sum = 0;

    let sumDis = 0;

    br = 0; //broj svih blogova

    niz.forEach( a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            br++;
            sum += b.likes;
            sumDis += b.dislikes;
        });
    });

    let avgLikes = sum / br;
    let avgDislikes = sumDis / br;

    niz.forEach(a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            if(avgLikes < b.likes && avgDislikes > b.dislikes) {
                console.log(b.title);
            }
        });
    });
};

superBlog(users);