// Selezionare elementi della DOM
const result = document.getElementById("result");

const fullNameInputElement = document.getElementById("full-name");
const distanceInputElement = document.getElementById("distance");
const ageSelectElement = document.getElementById("age");
const generateButtonElement = document.getElementById("generate");
const cancelButtonElement = document.getElementById("cancel");
let nomePasseggeroElement = document.getElementById("nome_passeggero");
let carrozzaElement = document.getElementById("carrozza");
let codiceCpElement = document.getElementById("codice_cp");
let offertaElement = document.getElementById("offerta");
let costoBigliettoElement = document.getElementById("costo_biglietto");


let message;

// Al click genera dati biglietto
generateButtonElement.addEventListener("click", function () {
  /*
  Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  */
  const fullName = fullNameInputElement.value;
  const age = ageSelectElement.value;

  const km_da_percorrere = distanceInputElement.value;
  let carrozza = Math.floor(Math.random() * 4) + 1;
  /* console.log(carrozza); */
  let codiceCp = Math.floor(Math.random() * 9000) + 90000;
  console.log(codiceCp);
  let nomePasseggero = fullNameInputElement.value;

  /* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65.
  */

  let price = km_da_percorrere * 0.21;
  console.log(price);

  if (isNaN(km_da_percorrere)) {
    console.log("Sorry you need to type two numbers");
  } else if (age == "minorenne") {
    // qui prezzo per i minori con sconto del 20%
    //prezzo = prezzo - prezzo * 0.2
    price -= price * 0.2;
    message = `${fullName}!Hai diritto allo sconto del 20%! <br> Prezzo biglietto: ${price.toFixed(
      2
    )}`;
   offertaElement.innerHTML = "biglietto scontato del 20%";
   costoBigliettoElement.innerHTML = price.toFixed(2)  + "€";
    //console.log(price);
    //console.log(message);
  } else if (age == "over65") {
    // qui prezzo per gli over con sconto del 40%
    price -= price * 0.4;
    message = `${fullName}!Ciao nonno, hai diritto allo sconto del 40%! <br> Prezzo biglietto: ${price.toFixed(
      2
    )}`;
    offertaElement.innerHTML = "biglietto scontato del 40%";
    costoBigliettoElement.innerHTML = price.toFixed(2) + "€";
    //console.log(price);
    //console.log(message);
  } else {
    // mostriamo prezzo standard
    message = `${fullName}!Mi dispiace per te niente sconto! Prezzo pieno del biglietto: ${price.toFixed(
      2
    )}`;
    offertaElement.innerHTML = "biglietto standard";
    costoBigliettoElement.innerHTML = price.toFixed(2)  + "€";
    //console.log(price);
    //console.log(message);
  }

  // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
  document.getElementById("nome_passeggero").innerHTML = nomePasseggero;
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("codice_cp").innerHTML = codiceCp;
  /* result.innerHTML = message;
  console.log(message); */
});

// Al click annulla tutto
cancelButtonElement.addEventListener("click", function () {
  fullNameInputElement.value = "";
  ageSelectElement.value = "minorenne";
  distanceInputElement.value = "";
  nomePasseggeroElement.innerHTML = "";
  carrozzaElement.innerHTML = "";
  codiceCpElement.innerHTML = "";
  offertaElement.innerHTML = "";
  costoBigliettoElement.innerHTML = "";

  /* result.innerHTML = ""; */
});
