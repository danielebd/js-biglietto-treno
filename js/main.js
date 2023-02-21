'use strict';

//inserisci kilometraggio da percorrere
const percorso = parseInt(prompt('Iserisci km da persorrere'))
console.log(percorso)

//inserisci età passeggero
const eta = parseInt(prompt('Iserisci età'))
console.log(eta)

//calcolo prezzo senza applicazione sconto
let prezzo = (percorso * 0.21)
console.log(prezzo)

/* calcolo prezzo sulle fasce di età così da applicare la scontistica 
nel caso in cui il passeggero rientri nelle categorie agevolate  */
if(eta >= 65) {
    console.log(prezzo * (60 / 100))
}

else if(eta < 18) {
    console.log(prezzo * (80 / 100))
}

else {
    console.log(prezzo)
}

//stampare prezzo finale della tratta su console e pagina
console.log ('il prezzo del biglietto è ' + prezzo + '€')
document.querySelector('h1').innerHTML = 'il prezzo del biglietto è di ' + prezzo + '€'