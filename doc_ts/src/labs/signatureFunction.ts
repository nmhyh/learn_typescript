// FUNCTION SIGNATURE
// let greet: Function;
// greet = () => console.log('Hello world');
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);
// greet('henry', 'hello');

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo, action: string) =>
  action === "add" ? numOne + numTwo : numOne - numTwo;
// console.log(calculate(4, 2, 'minus'));

type Student = { name; age };
let printStudent: (student: Student) => void;
printStudent = (myStudent: Student) =>
  console.log(`${myStudent.name} is ${myStudent.age} years old`);
printStudent({ name: "henry", age: 30 });

const nam = {
  name: "nam",
  age: 25,
};

printStudent(nam);
