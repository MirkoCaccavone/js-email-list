
// settiamo le variabili 
const list = document.getElementById('container');
const button = document.getElementById('bottone')


// Creare un evento click sul bottone
button.addEventListener('click', () => {

    // Array vuoto per salvare le liste
    let listaEmail =[];

    // Svuotare la lista ad ogni click
    list.innerHTML = '';
    
    // Creare un ciclo for che generi 10 indirizzi email
    for (let i = 0; i < 10; i++){

        // Creare una chiamata API per generare un indirizzo email
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            // console.log(response);
           
            const email = response.data.response;
            // console.log(email);
            listaEmail.push(email);
           

            // Stampare in pagina gli indirizzi email
            list.innerHTML += `<li>${email}</li>`; 
        });
        
    };
    // Console log per vedere tutte le liste di email
    console.log(listaEmail);
});

 

