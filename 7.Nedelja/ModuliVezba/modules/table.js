import { generateImage } from "./general";

let generateTable = parent => {
    let table = document.createElement('table');
    table.style.border = "solid 10px black";
    parent.appendChild(table);
    return table;
};

export {generateTable};