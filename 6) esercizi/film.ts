type Film = {
    titolo: string;
    anno: number;
    valutazione: number
}

let listaFilm: Film[] = [];

function aggiungiFilm(titolo: string, anno: number, valutazione: number) {
    listaFilm.push({titolo, anno, valutazione})
}

function visualizzaFilm() {
    console.log("Lista dei film:\n")
    listaFilm.forEach((film) => {
        console.log(`Titolo: ${film.titolo}\nAnno: ${film.anno}\nValutazione: ${film.valutazione}`)
    })
}

aggiungiFilm("Mammt", 1969, 8.0);
aggiungiFilm("Sort", 2001, 7.2);
aggiungiFilm("Soct", 1938, 6.0);
visualizzaFilm();