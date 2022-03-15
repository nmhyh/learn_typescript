// 1. Explicit types
// Khai báo kiểu dữ liệu
let count: number = 123;
let studentName: string = 'Alice';

// 2. Infered types
// Detect đc kiểu dữ liệu tương ứng khi k khai báo kiểu dữ liệu
// Một số trường hợp k detect đc sẽ hiểu là kiểu any
let isActive = true;
let numberListArr = [1, 2, 3];

// 3. Eraised types
// Sau khi compile từ TS sang JS, tất cả type annotation sẽ bị xóa

// 4. Downleveling
// Tuỳ vào target mà code sau khi được compile ra javascript sẽ khác nhau để đảm bảo target environment có thể hiểu và thực thi được code mình viết bên typescript.
