// ARRAY AND OBJECTS
let names = ['mai', 'nam', 'hung'];
names.push('son');
// names.push(1); // error
// names.push(false); // error

let numbers = [1, 2, 3];
// numbers.push('henry'); // error
numbers[3] = 4;
console.log(numbers);

let mixed = [1, 'henry', false];
mixed.push('herry');
mixed[3] = true;
// console.log(mixed);
// mixed.push({ a: '2', b: '3'}) // error

let person = {
	name: 'henry',
	age: 25,
	isStudent: false
}

person.name = 'name';
// person.age = 'abc'; // error
// person.hobbies = ['book']; // error

// person = {
// 	name: 'lan',
// 	age: 20,
// 	isStudent: true,
// 	skills: ['js']
// }