// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.


const numeroChilometri = Number(prompt("Indicare il numero dei chilometri che si intende percorrere"));
console.log("il numero dei chilometri è: " + numeroChilometri);

const userAge = Number(prompt("Quanti anni hai?"));
console.log("l'età dell'utente è: " + userAge);



/* Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni 
va applicato uno sconto del 40% per gli over 65.
 */

const prezzoBiglietto = 0.21;
const prezzoTotale = (numeroChilometri * prezzoBiglietto).toFixed(2);
console.log("il prezzo totale è: " + prezzoTotale);
const ageUnder = 18;
const ageOver = 65;

if (userAge < ageUnder) {
    /* console.log("l'utente  è minorenne ed ha diritto ad un 20% di sconto"); */
    const bigliettoUnder = (prezzoTotale * (80/100)).toFixed(2);
    console.log("il prezzo del biglietto dell'utente minorenne è: " + bigliettoUnder + "€");

} else if (userAge > ageOver) {
    /* console.log("l'utente  è nella fascia over 65 ed ha diritto ad un 40% di sconto"); */
    const bigliettoOver = (prezzoTotale * (60/100)).toFixed(2);
    console.log("il prezzo del biglietto dell'utente della fascia over 65 è: " + bigliettoOver + "€");

} else {    
    console.log("il prezzo del biglietto regolare è: " + prezzoTotale + "€");
}

// L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.