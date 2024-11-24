function fetchAPIUtenti() {
    fetch('http://localhost:3000/utenti')
        .then(response => response.json())
        .then(utenti => {
            // definisco la destinazione dove verranno iniettati i record dal db
            const datiInTabella = document.getElementById("contenutoTabella");
            datiInTabella.innerHTML = ""; // pulizia preliminare della tabella

            // popolo la mia tabella con i dati degli utenti
            utenti.forEach(utente => {
                const row = `
                    <tr>
                        <td>${utente.id}</td>
                        <td>${utente.nome}</td>
                        <td>${utente.cognome}</td>
                        <td>${utente.cod_fis}</td>
                    </tr>`;
                
                // eseguo l'append della nuova riga
                datiInTabella.innerHTML += row;
            });
        })
        .catch(error => console.error("Errore di tipo: ", error));
}

// funzione per aggiungere un nuovo utente
document.getElementById("moduloAggiuntaUtente").addEventListener('submit', function(event) {
    event.preventDefault(); // evito il reload della pagina

    const nomeUtente = document.getElementById("nome").value;
    const cognomeUtente = document.getElementById("cognome").value;
    const codFisUtente = document.getElementById("cod_fis").value;

    const nuovoUtente = {nome:nomeUtente,cognome:cognomeUtente,cod_fis:codFisUtente};

    fetch("http://localhost:3000/utenti", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuovoUtente)
    })
        .then(response => response.json())
        .then(utente => {
            console.log("Dettagli utente aggiunto: ", utente);
            // chiamo la funzione per aggiornare la lista utenti
            fetchAPIUtenti();
            document.getElementById("moduloAggiuntaUtente").reset();
            // dopo l'avvenuto inserimento, il form viene svuotato
        })
        .catch(error => console.error("Errore di tipo: ", error));
});

fetchAPIUtenti();