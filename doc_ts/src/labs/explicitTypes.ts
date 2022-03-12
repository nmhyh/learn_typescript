// EXPLICIT TYPE
let myName: string = 'nam';
let age: number;
let isAuth: boolean;

myName = 'henry';
age = 30;
isAuth = false;

// array
let students: string[] = ['nam', 'hung'];
students.push('lan');
console.log(students);

// UNION
let mixed: (string | number | boolean)[]
mixed = ['henry', 5, true];
mixed.push(6);
mixed.push('lan');
mixed.push(false);

let id: string | number;
id = '123';
id = 123;

let hobby: 'book' | 'music';
// hobby = 'cooking'; // error

// object
let person: object;
person = { name: 'henry', age: 30 };
person = [];

let student: {
	name: string,
	age: number,
	isGood: boolean
}

student = {
	name: 'henry',
	age: 20,
	isGood: true
}
