let playlist = ["Heat", "Sunrise", "Echo"];

// Aggiungi due brani in fondo
playlist.push("Moonlight", "Waves");
// playlist = ["Heat", "Sunrise", "Echo", "Moonlight", "Waves"]

// Sposta il primo brano in ultima posizione
let firstSong = playlist.shift(); // rimuove "Heat"
playlist.push(firstSong);
// playlist = ["Sunrise", "Echo", "Moonlight", "Waves", "Heat"]

// Estrai i brani centrali (escluso primo e ultimo)
let middleSongs = playlist.slice(1, -1);
// middleSongs = ["Echo", "Moonlight", "Waves"]




let coda = ["A", "B", "C", "D"];

// Due nuove persone arrivano all'inizio
coda.unshift("X", "Y");
// coda = ["X", "Y", "A", "B", "C", "D"]

// Fai uscire una persona dal fondo
let uscita = coda.pop();
// uscita = "D", coda = ["X", "Y", "A", "B", "C"]

// Rimuovi la persona al posto 2 (indice 1)
let rimossa = coda.splice(1, 1)[0];
// rimossa = "Y", coda = ["X", "A", "B", "C"]




let numeri = [5, 3, 9, 1, 4];

// Rimuovi primo e ultimo
numeri.shift(); // rimuove 5
numeri.pop(); // rimuove 4
// numeri = [3, 9, 1]

// Aggiungi 7 in coda
numeri.push(7);
// numeri = [3, 9, 1, 7]

// Ottieni sottoserie primi due elementi
let primiDue = numeri.slice(0, 2);
// primiDue = [3, 9]




let regali = ["Libro", "Puzzle", "Sciarpa"];

// Aggiungi in testa due regali
regali.unshift("Gioco", "Cioccolato");
// regali = ["Gioco", "Cioccolato", "Libro", "Puzzle", "Sciarpa"]

// Rimuovi secondo elemento (indice 1)
regali.splice(1, 1);
// regali = ["Gioco", "Libro", "Puzzle", "Sciarpa"]

// Copia ultimi due elementi
let ultimiDue = regali.slice(-2);
// ultimiDue = ["Puzzle", "Sciarpa"]




let messaggi = ["hey", "ciao", "tutto bene?", "ok"];

// Aggiungi messaggio in fondo e in testa
messaggi.push("arrivederci");
messaggi.unshift("buongiorno");
// messaggi = ["buongiorno", "hey", "ciao", "tutto bene?", "ok", "arrivederci"]

// Rimuovi ultimo messaggio arrivato
messaggi.pop();
// messaggi = ["buongiorno", "hey", "ciao", "tutto bene?", "ok"]

// Messaggi centrali (senza primo e ultimo)
let messaggiCentrali = messaggi.slice(1, -1);
// messaggiCentrali = ["hey", "ciao", "tutto bene?"]




let scorte = [12, 5, 8, 3, 9];

// Aggiungi due nuovi valori in fondo
scorte.push(7, 10);
// scorte = [12, 5, 8, 3, 9, 7, 10]

// Togli il primo
scorte.shift();
// scorte = [5, 8, 3, 9, 7, 10]

// Sposta l'ultimo in testa
let last = scorte.pop();
scorte.unshift(last);
// scorte = [10, 5, 8, 3, 9, 7]

// Copia delle quantità centrali
let centrali = scorte.slice(1, -1);
// centrali = [5, 8, 3, 9]



let spesa = 120;

let risultato = spesa >= 100 ? "sconto" : "nessuno";
// risultato = "sconto"


function concatenaSep(sep, ...pezzi) {
return pezzi.join(sep);
}

// Chiamata con argomenti individuali
let str1 = concatenaSep("-", "ciao", "mondo", "JS");
// str1 = "ciao-mondo-JS"

// Chiamata con un array espanso
let arr = ["uno", "due", "tre"];
let str2 = concatenaSep(",", ...arr);
// str2 = "uno,due,tre"



let t1 = ["js", "es6"];
let t2 = ["alg", "db"];

// Merge senza modificare originali
let allTags = [...t1, ...t2];
// allTags = ["js", "es6", "alg", "db"]


let eta = 16;

let accesso = eta >= 18 ? "adulto" : "minore";
// accesso = "minore"



function sommaVariabile(...nums) {
return nums.reduce((acc, n) => acc + n, 0);
}

// Prova con numeri individuali
let somma1 = sommaVariabile(3, 5, 7);
// somma1 = 15

// Prova con array espanso
let arrayNumeri = [2, 4, 6];
let somma2 = sommaVariabile(...arrayNumeri);
// somma2 = 12



let p1 = ["pane", "latte"];
let p2 = ["pasta", "uova"];

// Unione senza modificare originali
let listaCompleta = [...p1, ...p2];
// listaCompleta = ["pane", "latte", "pasta", "uova"]


const info = ["Luca", 28, "CTO", "Milano", "Italia"];

// Estrai nome e ruolo, ignorando il resto
const [nome, , ruolo] = info;

console.log(nome); // "Luca"
console.log(ruolo); // "CTO"



const user = { username: "cli_user", role: "editor" };

// Destructuring con alias e default
const { username: nick, role, active = false } = user;

console.log(nick); // "cli_user"
console.log(role); // "editor"
console.log(active); // false




function prendiPrimoEConta(...items) {
const [primo, ...resto] = items;
return { primo, contaResto: resto.length };
}

// Esempio
console.log(prendiPrimoEConta(1, 2, 3, 4));
// { primo: 1, contaResto: 3 }




const dati = ["Marco", "Rossi", 32, "Roma", "IT"];

// Estrai solo nome e città
const [nome2, , , citta] = dati;

console.log(nome2); // "Marco"
console.log(citta); // "Roma"
