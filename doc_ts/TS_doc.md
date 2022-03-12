## Lựa chọn giữa Javascript và Typescript?
	- Javascript:
		+ Linh hoạt
		+ Không cần phải định nghĩa kiểu dữ liệu hoặc tìm hiểu kiểu dữ liệu khi sử dụng libs
		+ Code nhanh khi làm 1 mình
		+ Cần phải hiểu rõ về Javascript để tránh những lỗi lặt vặt

	- Typescript:
		+ Gặp khó khăn với type system vì bị lỗi liên quan tới kiểu dữ liệu suốt ngày cho những bạn chưa quen
		+ Nhưng đc cái ns nhắc code bao xịn
		+ Sau khi team quen dần với TS thì code sẽ tự tin hơn, đỡ lỗi vặt hơn, đặc biệt là những bạn mới
		+ Code 1 mình thì hơi chậm lúc ban đầu, vì phải tìm hiểu kiểu dữ liệu để khai báo
		+ Code cho cả team thì đc lợi rất nhiều từ việc auto complete

## Setup TS project
- Cài đặt npm packages
# using yarn
yarn global add typescript ts-node ts-lib @types/node
# using npm
npm i -g typescript ts-node ts-lib @types/node

- Cài đặt unit test
# using yarn
yarn add --dev jest typescript ts-jest @types/jest
yarn ts-jest config:init
# using npm
npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init
- Khởi tạo file tsconfig.json mặc định
tsc --init

## Những điều cơ bản cần nắm trong typescript
	1. Static type checking
		- TS giúp mình phát hiện ra lỗi ngay trong lúc code
		- Giúp tránh lỗi typo (phổ biến bên JS)
		- Tiết kiệm thời gian debug

	2. Typer for Tooling
		- Ngoài ra thông báo lỗi cho mình lúc code
		- Typescript còn có thể giúp mình hạn chế lỗi bằng việc hỗ trợ auto completions / suggestions

	3. tsc - typescript compiler
	
	4. Emitting with Errors

## Explicit types and Inferred types
	1. Explicit types
		- Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu 2 chấm đằng sau tên biến.
		- Ex:
			let count: number = 123;
			let studentName: string = 'Alice';
			let isActive: boolean = true;
			const numberList: number[] = [1, 2, 3];
	
	2. Infered types
		- Typescript thông minh detect được kiểu dữ liệu tương ứng ngay cả khi mình không khai báo cụ thể kiểu dữ liệu.
		- Ex:
			let count = 123;
			let studentName: string = 'Alice';
			let isActive: boolean = true;
			const numberList: number[] = [1, 2, 3];

	3. Eraised types
		- Sau khi compile từ typescript sang javascript tất cả type annotation sẽ bị xoá.

	4. Downleveling
		- Tuỳ vào target mà code sau khi được compile ra javascript sẽ khác nhau để đảm bảo target environment có thể hiểu và thực thi được code mình viết bên typescript.

## Strictness - Các config về strict trong tsconfig.json
	1. strict flag là gì?
		- Bật strict=true sẽ bật tất cả options liên quan tới strict lên true.
		- Mặc định các options liên quan tới strict là false, nhưng recommend sử dụng true
		- Config của từng option sẽ ưu tiên cao hơn so với "strict". Tức strict=true, mà noImplicitAny=false thì giá trị cuối cùng vẫn là noImplicitAny=false.

	2. Option: noImplicitAny
		- Khi typescript không thể xác định được kiểu dữ liệu của một biến nào đó, thì biến đó sẽ được mang kiểu dữ liệu any
 		- Khi bật lên true, nó sẽ báo lỗi nếu trường hợp này xảy ra, ngược lại bỏ qua lỗi này.

	3. Option: strictNullChecks
		- Khi bật lên true thì sẽ báo lỗi khi null/undefined được sử dụng không đúng. Ví dụ như gọi những hàm của number, string, array, ... chẳng hạn.
		- Khi config false thì sẽ bỏ qua, nhưng có rủi ro xảy ra lỗi lúc runtime.

	4. Option: alwaysStrict
		- Khi bật lên true thì typescript sẽ luôn parse files ở chếđộ strict mode và sẽ có "use strict" ở đầu filejavascript được tạo ra.

	5. Other options
		# Option 										 | Desc
		1 strictBindCallApply 			 | đảm bảo bind, call và apply được gọi đúng args
		2 strictFunctionTypes 			 | đảm bảo đúng dữ liệu cho parameters của function (ko áp dụng
		cho method)
		3 strictPropertyInitializer  | đảm bảo thuộc tính của class phải được khởi tạo
		4 noImplicitThis 						 | đảm bảo là this không mang kiểu dữ liệu any
		5 useUnknownInCatchVariables | đảm bảo là biến trong catch là kiểu unknown (v4.4)
		Tham khảo thêm: https://www.typescriptlang.org/tsconfig#strict
## Điều cần lưu ý với phép so sánh trong typescript
	1. Nhắc lại về == và === bên Javascript
		- So sánh khác kiểu dữ liệu với ==, thì sẽ được chuyển về number để so sánh. (**)
		- Với 3 dấu === thì sẽ giữ nguyên giá trị để so sánh.
		- Tham khảo chi tiết tại đây: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
		- Ex:
			2 == '2'; // true
			false == 0; // true
			2 === '2'; // false
			false === 0; // false

	2. So sánh bên typescript?
		- Ex:
			2 == '2';
			2 === '2';
			// ts error: This condition will always return 'false' since the types 'number' and 'string' have no overlap. ts(2367)

	3. So sánh object
		- object, array và function là tham chiếu.
		- Khi so sánh 2 tham chiếu, thì địa chỉ của tham chiếu được so sánh, chứ không phải giá trị thật sự.
		- Ex:
			const studentA = { id: 1, name: 'Alice' };
			const studentB = studentA;
			studentA === studentB; // true;
			studentA === { id: 1, name: 'Alice' }; // false
			-------------------------------------------------------
			// usually, we just compare the id of two objects
			const studentA = { id: 1, name: 'Alice' };
			const studentB = { id: 1, name: 'Alice' };
			studentA.id === studentB.id; // true
			-------------------------------------------------------
			let student; // undefined
			// fetch data
			student = {
			id: 1,
			name: 'Alice',
			}
			// check truthy
			if (student) {}
			-------------------------------------------------------
			let student = {};
			// fetch data
			student = {
			id: 1,
			name: 'Alice',
			}
			if (student?.id) {}

	4. null vs undefined
		- Something hasn't been initialized : undefined.
		- Something is currently unavailable: null
		- null is equal to undefined if using ==
		- Ex:
			null == undefined; // true;
			null == 0; // false
			null >= 0; // true
			if (something == null) {} // either null or undefined
			if (something) {} // any truthy value
			if (!something) {} // any falsy value
			-------------------------------------------------------
			// Check if a global variable existed
			if (typeof window !== 'undefined') {
			// if window object is available or not
			// do something on client side
			}
			-------------------------------------------------------
			JSON.stringify({
			id: null,
			name: undefined,
			});
			// will return "{\"id\":null}"
			// undefined is removed from the JSON 💡

## const / let và cách đặt tên biến đúng chuẩn
	1. When to use const
	- Dùng cho hằng số. UPPER_CASE
	- Dùng cho biến mà không có nhu cầu thay đổi giá trị. camelCase
	- Ex:
		// constants
		const API_URL = 'https://api.com';
		const BACKGROUND_URL = 'https://image.com'
		const DEFAULT_SIZE = 12;
		const SECONDS_PER_HOUR = 3600;
		-------------------------------------------------------
		const channelName = 'Easy Frontend';
		const studentId = 123;
		const isActive = true;
		const student = {};
		student.name = 'Bob';
		const numberList = [];
		numberList.push(1);
	--> Luôn ưu tiên dùng const, đổi sang let khi cần thiết.
	2. When to use let
	- Dùng cho những biến có nhu cầu thay đổi bằng việc thực hiện phép gán. (re-assignment)
	- Ex:
		let count = 1;
		count++;
		for (let i = 0; i < 10; i++) {
		console.log(i);
		}
		let numberList = [1, 2, 3];
		numberList = [];

	3. Naming convention
		# Name 						 	| Case 			 | Examples
		1 Tên hằng số 		 	| UPPER_CASE | API_URL, IMAGE_URL, PAGE_SIZE,..
		2 Tên biến boolean	| camelCase	 | hasName, isActive, show,..
		3 Tên biến số ít  	| camelCase  | student, product, count,..
		3 Tên biến số nhiều | camelCase  | studentList, productList,..
		4 Tên hàm 					| camelCase  |	addProduct, convertObjectToArray,..

## Truthy vs Falsy
	1. What is truthy / falsy
		-	Falsy values là các giá trị liệt kê trong bảng dưới.
		- Ngược lại, tất cả là truthy (kể cả object rỗng, mảng rỗng)

	2. Use cases
		Ex:
			// check if falsy (use ! operator)
			if (!studentId) {}
			if (!isSelected) {}
			if (!isSelected) {}
			// check if truthy
			if (student) {}
			if (studentId) {}
			if (isSelected) {}
			// Check length
			if (name.length) {} // BAD
			if (name.length > 0) {} // GOOD
			if (studentList.length) {} // BAD
			if (studentList.length > 0) {} // GOOD
			-------------------------------------------------------
			const name = 'Easy Frontend';
			console.log(!name); // false
			console.log(!!name); // true
			const name = '';
			console.log(!name); // true
			console.log(!!name); // false
			-------------------------------------------------------
			// !! operator or Boolean()
			const student = { id: 1, name: 'Alice' };
			const hasStudent1 = !!student?.id; // true
			const hasStudent2 = Boolean(student?.id); // true

## Những điều bạn cần biết về destructuring
1. Object destructuring
	- Ex:
		interface Student {
			id: number;
			name: string;
			age: number;
			gender: string;
		}
		const bob = {
			id: 1,
			name: 'Bob',
			age: 18,
			gender: 'male'
		};
		// OLD WAY
		const id = bob.id;
		const name = bob.name;
		// NEW WAY
		const { id, name } = bob;
		-------------------------------------------------------
		const bob = {
			id: 1,
			name: 'Bob',
			age: 18,
			gender: 'male'
		};
		// OLD WAY
		const id = bob.id;
		const rest = {
			name: bob.name,
			age: bob.age,
			gender: bob.gender,
		}
		// NEW WAY WITH REST OPERATOR
		const { id, ...rest } = bob;
		-------------------------------------------------------
		// Clone object with spread operator
		const bob1 = {
			id: 1,
			name: 'Bob 1',
			age: 18,
			gender: 'male'
		};
		const bob2 = {
			...bob1,
			name: 'Bob 2'
		};
		bob1 === bob2; // false;

2. Array destructuring
	- Ex:
		const fullName = 'Easy Frontend';
		const wordList = fullName.split(' '); // ['Easy', 'Frontend']
		// OLD WAY
		const firstName = wordList[0];
		const lastName = wordList[1];
		// NEW WAY
		const [firstName, lastName] = wordList;
		-------------------------------------------------------
		// Array with rest operator
		const [x, y, ...remaining] = [1, 2, 3, 4];
		console.log(x, y, remaining);
		// 1, 2, [3, 4]
		-------------------------------------------------------
		// Clone array with spread operator
		const numberList = [1, 2, 3, 4];
		const newList1 = [...numberList]; // [1, 2, 3, 4]
		const newList2 = [...numberList, 5, 6]; // [1, 2, 3, 4, 5, 6]
		-------------------------------------------------------
		// Clone array of objects (BE CAREFUL!!!)
		interface Student {
		id: number;
		name: string;
		age: number;
		gender: string;
		}
		const studentList: Student[] = [
		{ id: 1, name: 'Alice', age: 11, gender: 'female' },
		{ id: 2, name: 'Bob', age: 12, gender: 'male' }
		];
		const newList = [...studentList]; -> clone tham chiếu
		newList[0].name = 'Alice Alice';
		console.log(studentList[0].name); // ???
		-------------------------------------------------------
		// Swap two items
		let x = 5;
		let y = 10;
		// OLD WAY
		let temp = x;
		x = y; // 10
		y = temp; // 5
		// NEW WAY
		[y, x] = [x, y];

## Tổng quan về type system
1. Các kiểu dữ liệu thường gặp
	- Các kiểu dữ liệu bạn đã biết bên Javascript
		+ Primitive: number, boolean, string, null, undefined, symbol
		+ Reference: array, object, function
	- Còn typescript, bạn sẽ bắt gặp: any, unknown, void, never, ...
	- Ex:
		let count = 5;
		count = 'five';
		// type error: Type 'string' is not assignable to type 'number'.ts(2322)
		-------------------------------------------------------
		// adding any, solved 🤣
		let count: any = 5;
		count = 'five'; // no error now :v
		-------------------------------------------------------
		// three common primitive types: string, number and boolean
		let count: number = 10;
		let channelName: string = 'Easy Frontend';
		let isActive: boolean = true;
		// we can simply omit the type annotation
		let count = 10;
		let channelName = 'Easy Frontend';
		let isActive = true;
		-------------------------------------------------------

2. Literal types
	- Chỉ định một giá trị cụ thể làm kiểu dữ liệu.
	- Ex:
		let count: 1;
		let channelName: 'easy';
		let isActive: false;
		let student: null;
		-------------------------------------------------------
		let count: 1 = 2;
		// error Type '2' is not assignable to type '1'
	- Với const, khi omit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận được 1 giá trị, không thể thay đổi được.
	- Ex:
		const count = 1; // const count: 1
		const channelName = 'Easy Frontend'; // const channelName: 'Easy Frontend'
		const isActive = false; // const isActive: false
		-------------------------------------------------------
		let count = 1; // let count: number
		let channelName = 'Easy Frontend'; // let channelName: string
		let isActive = false; // let isActive: boolean
		-------------------------------------------------------
		const student = {
			id: 1,
			name: 'Easy Frontend',
		}
		// this is how ts understand:
		// const student: {
		// id: number;
		// name: string;
		// }
		// because the props of an object can be updated
		student.name = 'Typescript is easy! :P'; // works
		-------------------------------------------------------
		const student = {
			id: 1,
			name: 'Easy Frontend',
		} as const
		// this is how ts understand:
		// const student: {
		// readonly id: 1;
		// readonly name: "Easy Frontend";
		// }
		// you now can't update props of this object
		student.name = 'Typescript is easy, really?!';
		// error: Cannot assign to 'name' because it is a read-only property.

3. Type Alias and Interface

4. Điều cần lưu ý khi làm việc với function

5. Tất tần tật về Enum trong typescript



