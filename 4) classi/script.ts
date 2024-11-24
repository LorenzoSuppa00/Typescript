class Persona  {
    nome: string;
    eta: number;

    constructor(nome: string, eta: number) {
        this.nome = nome;
        this.eta = eta;
    }
}

class Calciatore extends Persona {
    squadra: string;

    constructor(nome: string, eta: number, squadra: string) {
        super(nome, eta);
        this.squadra = squadra
    }

    speaker(): void {
        console.log(`Ha segnato per ${this.squadra}, ${this.nome}!`)
    }
}

let lautaro = new Calciatore("Lautaro Martinez", 27, "Inter");
lautaro.speaker();