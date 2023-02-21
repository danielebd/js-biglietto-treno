'use strict';

//inserisci kilometraggio da percorrere
const percorso = parseInt(prompt('Iserisci km da persorrere'))
console.log('km da percorrere: ' + percorso)

//inserisci età passeggero
const eta = parseInt(prompt('Iserisci età'))
console.log('età passeggero: ' + eta)

//calcolo prezzo senza applicazione sconto
let prezzo = parseFloat(percorso * 0.21)
console.log('prezzo senza sconti applicati: ' + prezzo + '€')

/* calcolo prezzo sulle fasce di età così da applicare la scontistica 
nel caso in cui il passeggero rientri nelle categorie agevolate  */
if(eta >= 65) {
    console.log('prezzo scontato over 65 è di:' + prezzo * (60 / 100) + '€')
}

else if(eta < 18) {
    console.log('prezzo scontato per i minori 18 è di: ' + prezzo * (80 / 100) + '€')
}

else {
    
}

console.log (prezzo.toFixed(2));

//stampare prezzo finale della tratta su console e pagina
console.log ('il prezzo del biglietto è ' + prezzo + '€')
document.querySelector('h1').innerHTML = 'il prezzo del biglietto è di ' + prezzo + '€'

let test = 10.5555;
console.log(test.toFixed(2))