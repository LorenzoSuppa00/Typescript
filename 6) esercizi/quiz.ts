type Domanda = {
    domanda: string,
    punteggio: number
}

let domande: Domanda[] = [
    {
        domanda: "Come fa il cane?",
        punteggio: 1
    },
    {
        domanda: "Qual è la città natale di Rey Mysterio?",
        punteggio: 5
    }
];

function calcolaTot(quiz: Domanda[]): number {
    let totale = 0; // Perche devo inizializzarla per forza?
    quiz.forEach(domanda => {
        totale += domanda.punteggio
    });
    return totale;
}

console.log("Totale punteggio: " + calcolaTot(domande));