const express = require('express');
const bodyParser = require('body-parser');

// per risolvere il problema CORS, comunicazione tra due server a porte diverse
const cors = require('cors');

// creo instanza di express
const app = express()
const PORT = 3000;

// middleware per il CORS
app.use(cors());

// middleware per il JSON
app.use(bodyParser.json());

// lista di libri
let books = [];
let nextID = 1; // ID autoincrementale

/******* ROUTING  *********/
// endpoint per leggere tutti i libri nel db
app.get('/books', (req,res) => {
    res.json(books);
});

// endpoint per aggiungere un nuovo libro nel db
app.post('/books', (req,res) => {
    const {titolo,autore,anno,genere} = req.body;
    const newBook = {id:nextID++, titolo,autore,anno,genere};

    // aggiungo il nuovo libro nella collezione books
    books.push(newBook);

    // stampo un responso per l'inserimento
    res.status(201).json(newBook); // quando inserisco un libro, questo viene mostrato
});

// endpoint per modificare un libro già presente nel db
app.put('/books/:id', (req,res) => {
    const {id} = req.params;
    const {titolo,autore,anno,genere} = req.body;

    // identifichiamo l'indice del libro da aggiornare
    const bookIndex = books.findIndex(b => b.id === parseInt(id));

    // cosa succede se il libro non viene trovato??
    if (bookIndex === -1) {
        return res.status(404).send("Libro non presente nel db");
    }

    // aggiorniamo le informazioni sul libro con le nuove inserite
    books[bookIndex] = {id:parseInt(id), titolo, autore, anno, genere};
    res.status(200).json(books[bookIndex]);
});

// endpoint per eliminare un libro già presente nel db
app.delete('/books/:id', (req,res) => {
    const {id} = req.params;
    // identifichiamo l'indice del libro da eliminare
    const bookIndex = books.find(b => b.id === parseInt(id));

    // cosa succede se il libro non viene trovato??
    if (bookIndex === -1) {
        return res.status(404).send("Libro non presente nel db");
    }

    // se il libro viene trovato, con il metodo avanzato splice lo elimino dall'array
    // NOTA: splice ha due argomenti, il primo è la posizione, il secondo determina, da quella posizione, quanti elementi eliminare
    books.splice(bookIndex, 1);
    res.status(200).send("Libro eliminato!");
});

// avvio del server
app.listen(PORT, () => {
    console.log("Server avviato sulla porta " + PORT + " http://localhost:" + PORT+ "/books");
})

