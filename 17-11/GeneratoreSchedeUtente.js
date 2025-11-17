let utenti = []; 

function validaInput(nome, eta, professione) {
if (!nome || !professione || !eta) {
console.warn("Campi mancanti o non validi.");
return false;
}

if (eta <= 0 || eta > 120) {
console.error("Età non valida!");
return false;
}

return true;
}


const classificaUtente = (eta = 0) => {
switch (true) {
case (eta < 18): return "Minorenne";
case (eta <= 65): return "Adulto";
default: return "Senior";
}
};


function creaUtente(nome, eta, professione) {
return {
nome,
eta,
professione,
categoria: classificaUtente(eta)
};
}


function aggiungiUtente() {
const nome = document.getElementById("nome").value.trim();
const eta = Number(document.getElementById("eta").value);
const professione = document.getElementById("professione").value.trim();

console.log("Tentativo di aggiungere utente:", nome, eta, professione);

if (!validaInput(nome, eta, professione)) return;

const nuovoUtente = creaUtente(nome, eta, professione);

utenti.push(nuovoUtente);

console.table(utenti);

mostraUtenti();
}


const generaCard = utente => `
<div class="user-card">
<strong>${utente.nome}</strong> (${utente.eta} anni)<br>
Professione: ${utente.professione}<br>
Categoria: <em>${utente.categoria}</em>
</div>
`;


function mostraUtenti() {
const container = document.getElementById("userList");
container.innerHTML = "";


for (const user of utenti) {
container.innerHTML += generaCard(user);
}

console.log("Debug oggetti utenti");
for (const i in utenti) {
console.log(`Indice ${i}:`, utenti[i]);
}
}

