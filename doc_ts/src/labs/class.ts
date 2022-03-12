// CLASS
export class Employee {
	// Case 1
	// public name: string
	// private age: number
	// readonly male: boolean

	// constructor(name: string, age:number, male: boolean) {
	// 	this.name = name;
	// 	this.age = age;
	// 	this.male = male;
	// }

	// Case 2
	constructor(
		public name: string,
		private age: number,
		readonly male: boolean
	) {}
	print() {
		return `Name ${this.name}, Age: ${this.age}, Gender: ${this.male}`;
	}
}

const henry = new Employee('henry', 30, true);
// console.log(henry.name);
// console.log(henry.age); // error
// console.log(henry.male);
henry.name = 'nam';
// henry.male = false; // error
// console.log(henry);
// console.log(henry.print());


const bob = new Employee('Bob', 25, true);
let employees: Employee[] = [];
employees.push(henry);
employees.push(bob);
employees.forEach(employee => console.log(employee.name, employee.male, employee. print()));


