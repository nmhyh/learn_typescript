// Desctructuring -> Rút trích những dữ liệu ra ngoài
// 1. Object desctructuring
// vd: const { id, name } = bob;
// with rest operator -> lấy ra 1 cục
// vd: const { id, ...rest } = bob;
// with spread operator -> clone
// const bob2 = { ...bob1, name: 'Bob 2' };

// 2. Array desctructuring
// const worldList = ['Ngu My', 'Huynh'];
// vd: const [ firstName, lastName } = worldList;
// with rest operator -> lấy ra 1 cục
// vd: const [ x, y, ...remaining ] = [1, 2, 3, 4];
// with spread operator -> clone
// const newList1 = [...numberList, 5, 6];

// Clone array of objects
// Clone array thì clone luôn object bên trong
