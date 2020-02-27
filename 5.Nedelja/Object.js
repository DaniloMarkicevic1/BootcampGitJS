let blog = {
    naslov: 'Moj Blog',
    sadrzaj: 'Tekst...',
    autor: 'DM'
};

console.log(blog);
console.log(typeof blog);
console.log(typeof 5);
console.log(typeof "Danilo");
console.log(typeof true);

console.log(blog.naslov);
console.log(blog['naslov']);

blog.sadrzaj = 'Neki tekst2...';
console.log(blog);

blog['sadrzaj'] = 'Neki tekst 3....';
console.log(blog);

