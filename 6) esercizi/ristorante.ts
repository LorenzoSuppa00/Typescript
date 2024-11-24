class Prenotazione {
  nomeCliente: string;
  data: string;
  numeroPersone: number;

  constructor(nomeCliente: string, data: string, numeroPersone: number) {
    this.nomeCliente = nomeCliente;
    this.data = data;
    this.numeroPersone = numeroPersone;
  }
}

class Ristorante {
  prenotazioni: Prenotazione[];

  constructor(prenotazioni: Prenotazione[]) {
    this.prenotazioni = prenotazioni;
  }

  aggiungiPrenotazione(prenotazione: Prenotazione) {
    this.prenotazioni.push(prenotazione);
    return prenotazione;
  }

  stampaPrenotazioni() {
    console.log("Elenco prenotazioni:\n")
    this.prenotazioni.forEach((prenotazione) => {
      console.log(
        `Cliente: ${prenotazione.nomeCliente}\nData: ${prenotazione.data}\nN° Persone: ${prenotazione.numeroPersone}\n`
      );
    });
  }
}

let prenotazione1: Prenotazione = {
  nomeCliente: "Ciccio",
  data: "02/12/2024",
  numeroPersone: 8,
};

let prenotazione2: Prenotazione = {
  nomeCliente: "Mario",
  data: "01/12/2024",
  numeroPersone: 2,
};

let prenotazione3: Prenotazione = {
  nomeCliente: "Laura",
  data: "03/12/2024",
  numeroPersone: 4,
};

let ristorante: Ristorante = new Ristorante([]);

ristorante.aggiungiPrenotazione(prenotazione1);
ristorante.aggiungiPrenotazione(prenotazione2);
ristorante.aggiungiPrenotazione(prenotazione3);
ristorante.stampaPrenotazioni();

// // Tipo per una prenotazione
// type Reservation = {
//   customerName: string;
//   date: string; // formato "YYYY-MM-DD"
//   numberOfPeople: number;
// };
// // Array per memorizzare le prenotazioni
// let reservations: Reservation[] = [];
// // Funzione per aggiungere una prenotazione
// function addReservation(
//   customerName: string,
//   date: string,
//   numberOfPeople: number
// ): void {
//   const reservation: Reservation = { customerName, date, numberOfPeople };
//   reservations.push(reservation);
//   console.log(`Prenotazione aggiunta per ${customerName} il ${date}`);
// }
// // Funzione per visualizzare tutte le prenotazioni
// function displayReservations(): void {
//   console.log("Elenco delle prenotazioni:");
//   reservations.forEach((reservation) => {
//     console.log(
//       `Cliente: ${reservation.customerName}, Data: ${reservation.date}, Persone: ${reservation.numberOfPeople}`
//     );
//   });
// }
// // Esempi di utilizzo
// addReservation("Mario Rossi", "2024-10-20", 4);
// addReservation("Giulia Bianchi", "2024-10-21", 2);
// displayReservations();
