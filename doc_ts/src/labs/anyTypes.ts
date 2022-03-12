// ANY TYPES
let age: any = 15;
age = 'henry';
age = false;
age = {a: 'b'};
age = [1, 3];

let mixed: any[] = [];
mixed.push('123');
mixed.push(true);

let person: {name: any; age: any};
person = {name: 25, age: 'henry'};
