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