'use strict';

//inserisci kilometraggio da percorrere
const percorso = parseInt(prompt('Iserisci km da persorrere'));
console.log('km da percorrere: ' + percorso);

//inserisci età passeggero
const eta = parseInt(prompt('Iserisci età'));
console.log('età passeggero: ' + eta);

//calcolo prezzo senza applicazione sconto
let prezzo = parseFloat(percorso * 0.21);
console.log('prezzo senza sconti applicati: ' + prezzo + '€');

/* calcolo prezzo sulle fasce di età così da applicare la scontistica 
nel caso in cui il passeggero rientri nelle categorie agevolate  */
if(eta >= 65) {
    prezzo = prezzo * (60 / 100);
    console.log('prezzo scontato over 65 è di:' + prezzo + '€');
}

else if(eta < 18) {
    prezzo = prezzo  * (80 / 100);
    console.log('prezzo scontato per i minori 18 è di: ' + prezzo + '€');
}

else {
    
}

prezzo = prezzo.toFixed(2);

//stampare prezzo finale della tratta su console e pagina
console.log ('il prezzo del biglietto è ' + prezzo + '€')
document.querySelector('h1').innerHTML = 'il prezzo del biglietto è di ' + prezzo + '€'
