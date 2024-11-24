interface Car {
    brand: string;
    model: string;
    drive(): void;
}

var myCar: Car = {
    brand: "Ford",
    model: "Fiesta",
    drive() {
        console.log(`Sto guidando ${myCar.brand} ${myCar.model}`)
    }
}

myCar.drive();