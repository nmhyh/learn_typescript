// 1. STATIC TYPE CHECKING
const a = undefined;
// a.length // Expected an assignment or function call and instead saw an expression.
// a.map(x => x) // Error

const value = Math.random() < 0.5 ? 'a' : 'b';
// if (value !== 'a') {

// } else if (value === 'b') {

// }
// This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.

// 2. TYPES FOR TOOLING
function findEvenNumber (numberList: number[]) {
	if (numberList.length === 0) return undefined;
	// numberList. // auto complete
}

interface StudentInterFace {
	id: string;
	name: string;
	gender: 'male' | 'female';
	age: number;
}

const bob: StudentInterFace = {
	id: '1',
	name: 'Huynh',
	gender: 'female',
	age: 20
}

// 3. tsc - typescript compiler -> npm i -g typescript

// 4. Emitting with error
// noEmitOnError: true compiler has error -> do not complier file ts


