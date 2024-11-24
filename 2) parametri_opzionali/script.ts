function greet(name: string, age?: number): string {
  if (age) {
    return `Ciao ${name}, hai ${age} anni!`;
  } else {
    return `Ciao ${name}, non so quanti anni hai!`;
  }
}
console.log(greet("Alice"));
