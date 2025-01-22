// Descrizione
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const list = document.getElementById('container');

// Creare una lista di 10 indirizzi email
// Creare un ciclo for che generi 10 indirizzi email

for (let i = 0; i < 10; i++){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        // console.log(response);
        
        const email = response.data.response;
        console.log(email);

        list.innerHTML += `<li>${email}</li>`;

        
    });
};

// Creare una chiamata API per generare un indirizzo email

// Stampare in pagina gli indirizzi email generati

