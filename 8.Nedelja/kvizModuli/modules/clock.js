
let generateScore = (h2, skor) => {
let broj = 0;
    let clock = setInterval(() => {
        h2.textContent = `Vas odgovor je: ${broj}%`;
        if(broj < skor) {
            broj++;
        }
        else {
            clearInterval(clock);
        }
    }, 10);
};
export default generateScore