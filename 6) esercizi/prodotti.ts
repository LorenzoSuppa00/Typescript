//! array.reduce(function(accumulatore, currentValue, currentIndex, arr), initialValue)
let prodotti = [
  {
    nome: "Uova",
    prezzo: 0.5,
    quantita: 6,
  },
  {
    nome: "Latte",
    prezzo: 1.0,
    quantita: 4,
  },
];

function calcolaPrezzoTotale() {
    let totale = prodotti
    .filter((prodotto) => prodotto.quantita > 0)
    .reduce((accumulatore, prodotto) => accumulatore + prodotto.prezzo * prodotto.quantita, 0); //? 0 è il valore iniziale dell'accumulatore
    console.log("Totale dei prezzi dei prodotti in stock:", totale + " €");
}

calcolaPrezzoTotale();
