const originale = [1, 2, 3, 4];

// Cloniamo con spread
const copia = [...originale];

// Modifichiamo la copia
copia.push(5);

console.log(originale); // [1, 2, 3, 4] → invariato
console.log(copia); // [1, 2, 3, 4, 5] → modificato


const studenti = [
{ nome: "Luca", voto: 28 },
{ nome: "Anna", voto: 30 }
];

function presentaStudente({ nome, voto }) {
return `${nome} ha preso ${voto}`;
}

console.log(presentaStudente(studenti[0])); // "Luca ha preso 28"
console.log(presentaStudente(studenti[1])); // "Anna ha preso 30"


function ultimiDue([, secondo, terzo]) {
return [secondo, terzo];
}

// Esempio
console.log(ultimiDue([5, 6, 7])); // [6, 7]



const a = [1,2];
const b = [3,4];
const c = [5,6];

const unione = [...a, ...b, ...c];
console.log(unione); // [1,2,3,4,5,6]


function descriviProdotto({ nome, prezzo = 0 }) {
return `Nome: ${nome}, Prezzo: ${prezzo}`;
}

console.log(descriviProdotto({ nome: "Pane", prezzo: 2 })); // "Nome: Pane, Prezzo: 2"
console.log(descriviProdotto({ nome: "Latte" })); // "Nome: Latte, Prezzo: 0"