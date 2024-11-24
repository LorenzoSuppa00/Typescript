function fetchAPIBooks() {
    fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(books => {
            // definisco la destinazione dove verranno iniettati i record dal db
            const datiInTabella = document.getElementById("tableContent");
            datiInTabella.innerHTML = ""; // pulizia preliminare della tabella

            // popolo la mia tabella con i dati dei libri
            books.forEach(book => {
                const row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.titolo}</td>
                        <td>${book.autore}</td>
                        <td>${book.anno}</td>
                        <td>${book.genere}</td>
                        <td><button onClick="deleteBook(${book.id})">Elimina libro</button></td>
                    </tr>`;
                
                // eseguo l'append della nuova riga
                datiInTabella.innerHTML += row;
            });
        })
        .catch(error => console.error("Errore di tipo: ", error));
}

// funzione per aggiungere un nuovo libro
document.getElementById("bookForm").addEventListener('submit', function(event) {
    event.preventDefault(); // evito il reload della pagina

    const titoloLibro = document.getElementById("titolo").value;
    const autoreLibro = document.getElementById("autore").value;
    const annoLibro = document.getElementById("anno").value;
    const genereLibro = document.getElementById("genere").value;

    const newBook = {titolo:titoloLibro,autore:autoreLibro,anno:annoLibro,genere:genereLibro};

    fetch("http://localhost:3000/books", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook)
    })
        .then(response => response.json())
        .then(book => {
            console.log("Dettagli libro aggiunto: ", book);
            // chiamo la funzione per aggiornare la lista dei libri
            fetchAPIBooks();
            document.getElementById("bookForm").reset();
            // dopo l'avvenuto inserimento, il form viene svuotato
        })
        .catch(error => console.error("Errore di tipo: ", error));
});

// funzione per eliminare il libro
function deleteBook(id) {
    fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            console.log("Libro con id " + id + " eliminato");
            fetchAPIBooks(); // ricarico la lista dei libri
        })
        .catch(error => console.error("Errore di tipo: ", error));
}

fetchAPIBooks();