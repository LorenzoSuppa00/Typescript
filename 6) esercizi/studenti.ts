type Student = {
  id: number;
  name: string;
  age: number;
};

let students: Student[] = [];

function addStudent(id: number, name: string, age: number): void {
  const student: Student = { id, name, age };
  students.push(student);
  console.log(`Studente aggiunto: ${name}`);
}

function displayStudents(): void {
  console.log("Elenco degli studenti:");
  students.forEach((student) => {
    console.log(
      `ID: ${student.id}, Nome: ${student.name}, Età: ${student.age}`
    );
  });
}

addStudent(1, "Alice", 20);
addStudent(2, "Bob", 22);
displayStudents();
