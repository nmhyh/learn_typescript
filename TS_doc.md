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

##
