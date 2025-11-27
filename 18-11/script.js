// 1. Selezionare tutti gli elementi <a> nella pagina
const tuttiLink = document.querySelectorAll("a");
console.log("Tutti i link (<a>):", tuttiLink);

// 2. Contare quanti paragrafi ci sono
const tuttiParagrafi = document.querySelectorAll("p");
console.log("Numero di paragrafi:", tuttiParagrafi.length);

// 3. Trovare tutti gli elementi che hanno un attributo data-id
const elementiDataId = document.querySelectorAll("[data-id]");
console.log("Elementi con data-id:", elementiDataId);

// 4. Selezionare solo i link che portano a sezioni interne (href inizia con #)
const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log("Link a sezioni interne:", linkInterni);

