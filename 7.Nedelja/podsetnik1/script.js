let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(elem => {
    elem.addEventListener('click', () => {
        if(elem.style.textDecoration == 'line-through') {
            elem.style.textDecoration = 'none';
            elem.style.opacity = 1;
        }
        else {        
            elem.style.textDecoration = 'line-through';
            elem.style.opacity = 0.7;
        }
    });
});

