//Variabili e tipi//

let citta = "Palermo"; 
console.log(citta);

const pi=3.14;
pi=4;

let temperatura=25;
console.log("La temperatura è: " + temperatura + " gradi");

let vuota;
console.log(vuota); 

let numero=42;
let parola="Ciao";
let flag=false;
let nulla=null;
let indefinito=undefined;
console.log(typeof numero);
console.log(typeof parola);
console.log(typeof flag);
console.log(typeof nulla);
console.log(typeof indefinito);

//Operatori//

console.log(7 + 5); // 12
console.log(10 - 3); // 7
console.log(4 * 6); // 24
console.log(20 / 4); // 5

console.log(17 % 3); // 2

let punti=50;
punti += 10;
console.log(punti); // 60

console.log(5=="5"); // true
console.log(5==="5"); // false
console.log(5!=7); // true
console.log(8!== "8"); // true

//Condizioni//
let eta=20;
if (eta >= 18) {
    console.log("Sei maggiorenne.");
} else {
    console.log("Sei minorenne.");
}
let voto=30;
if (voto ===30) { console.log("Ottimo"); }
else if (voto >= 18) { console.log("Buono"); }
else {
    console.log("Insufficiente");
} 

let ora=9;
if (ora < 12) {
    console.log("Buongiorno");
} else if (ora < 18) {
    console.log("Buon pomeriggio");
} else {
    console.log("Buonasera");
}

//Cicli//
for (let i=1; i<=20; i++) {
    console.log(i); // Stampa i numeri da 1 a 20
}
for (let i=2; i<=20; i++) {
    console.log(i); // Stampa i numeri da 2 a 20
}

let i=10;
while (i>1) {
    console.log(i); // Stampa i numeri da 10 a 2
    i--;
}
 for (let i=1; i<=10; i++) { console.log(5 * i); } // Tabellina del 5

 let somma=0; 
    for (let i=1; i<=100; i++) { somma += i; }
    console.log(somma); // Somma dei numeri da 1 a 100

//Funzioni//
function saluta() {
    console.log("Ciao!"); // Stampa "Ciao!"
}
function somma(a, b) {
    return a + b; // Restituisce la somma di a e b
}

function moltiplica(a, b) {
    return a * b; // Restituisce il prodotto di a e b
}

function ispari(num) {
    return num % 2 === 0; // Restituisce true se num è pari, altrimenti false
}

function quadrato(num) {
    return num * num; // Restituisce il quadrato di num
}

function presentati(nome, eta) { console.log ("Ciao, mi chiamo " + nome + " e ho " + eta + " anni.");
} // Presenta una persona con nome ed età

//Array//
let frutti = ["mela", "banana", "pera"];
console.log(frutti[0]); 
frutti.push("kiwi");
console.log(frutti);

let rimosso=frutti.pop();
console.log(rimosso);

for (let i=0; i<frutti.length; i++) {
    console.log(frutti[i]); 
} // Stampa tutti i frutti nell'array

console.log(frutti.length); // Lunghezza dell'array 

//Oggetti//
let auto= {
    marca: "Fiat",
    modello: "Panda",
    anno:2005
};
console.log(auto.marca);
console.log(auto.anno);

auto.descrizi=function() {
    console.log("Questa è una " + this.marca + " " + this.modello + " del " + this.anno + ".");
};

//Interazione con L'utente//
let nomeUtente=prompt("Come ti chiami?");
alert("Ciao " + nome + "!");
let num=prompt("Inserisci un numero:");
alert(numero * numero); // Mostra il quadrato del numero inserito

//Mini-progetti flash//
1.  // Fai inserire due numeri all’utente con prompt() e mostra la loro somma con alert () //

let n1 = Number(prompt("Inserisci il primo numero:"));
let n2 = Number(prompt("Inserisci il secondo numero:"));

let somma = n1 + n2;
alert("La somma è: " + somma);

2. // Cres un array di tre nomi e saluta tutti con un ciclo //

let nomi = ["Maria", "Luca", "Gianni"];

for (let i = 0; i < nomi.length; i++) {
console.log("Ciao " + nomi[i]);
}

3. // Oggetto studente, stampa in alert: “Mario ha preso 28” //

let studente = {
nome: "Mario",
voto: 28
};

alert(studente.nome + " ha preso " + studente.voto);

4. // Maiuscola //

function inMaiuscolo(parola) {
return parola.toUpperCase();
}

console.log(inMaiuscolo("ciao")); // "CIAO"


5. // Stampa tutti i quadrati dei numeri da 1 a 10 //

for (let i = 1; i <= 10; i++) {
console.log(i * i);
}