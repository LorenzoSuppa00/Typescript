type Attivita = {
    titolo: string,
    descrizione: string,
    completata: boolean
}

var listaAttivita: Attivita[] = [];

function aggiungiAttivita(titolo: string, descrizione: string, completata: boolean) {
    listaAttivita.push({titolo, descrizione, completata})
    return listaAttivita;
}

function completaAttivita(checkTitolo: string) {
    listaAttivita.forEach((attivita) => {
        if (attivita.completata === false && attivita.titolo === checkTitolo) {
            attivita.completata = true;
        }
    })
}

function stampaAttivita(): void {
    console.log("LISTA ATTIVITÀ\n-----------------------")
    listaAttivita.forEach((attivita) => {
        console.log(`ID: ${listaAttivita.indexOf(attivita) + 1}\nTitolo: ${attivita.titolo}\nStato: ${attivita.completata ? "Completata" : "Da fare"}\n-----------------------`)
    });
}

aggiungiAttivita("Python", "Programmazione", false);
aggiungiAttivita("Excel", "Gestione rubrica", true);
stampaAttivita();
completaAttivita("Python")
stampaAttivita();