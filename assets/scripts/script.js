'use strict';

// Récuperation des elements du DOM
const inputNbVal = document.getElementById('nb-val');
const btnCalc = document.getElementById('btn-calc');
const container = document.getElementById('container-result'); 

// Event clic sur le button
btnCalc.addEventListener('click', () => {
    const nbVal = parseInt(inputNbVal.value);

    // Calcul...
    let message = 'Le traitement est 1';
    let result = 1;
    let count = 2;

    while(count <= nbVal) {
        result = result * count;    // Alternative:  result *= count;

        message = `${message} x ${count}`;
        count++;
    }
    console.log(message);

    // Affichage
    const baliseTraitement = document.createElement('p');
    baliseTraitement.innerText = message;

    const baliseResult = document.createElement('p');
    baliseResult.innerText = `Le resultat de la factorielle de ${nbVal} est ${result}`;

    container.appendChild(baliseTraitement);
    container.appendChild(baliseResult);
});