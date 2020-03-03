let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(elem => {
    elem.addEventListener('click', (event) => {
        // console.log(event.target);
        if(event.target.style.textDecoration == 'line-through') {
            event.target.style.textDecoration = 'none';
        }
        else {
            event.target.style.textDecoration = 'line-through';
        }

    });
});