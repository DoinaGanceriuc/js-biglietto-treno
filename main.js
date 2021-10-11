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

// L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo.