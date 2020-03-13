let prosekPlate = zaposleni => {
    let sum = 0;
    zaposleni.forEach(elem => {
        sum += elem.plata;
    });
    return sum/zaposleni.length;
};

export {prosekPlate};