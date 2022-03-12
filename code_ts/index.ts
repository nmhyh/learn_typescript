// GENERICS
type stringArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number | string>) => arr[arr.length - 1];
const l1 = last([1, 2, 3]);
// console.log(l1);
const l2 = last(['a', 'b']);
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const lastT1 = lastT([1, 2, 3]);
const lastT2 = lastT(['a', 'b']);
const lastT3 = lastT<string>(['d', 'e']);
// console.log(lastT1, lastT2, lastT3);

const makeArr = (x: number) => [x];
const m = makeArr(5);
// console.log(m);
const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT('a');
const m4 = makeArrT(123);
// console.log(m3);

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m5 = makeArrXY(5, 6);
const m6 = makeArrXY('a', 6);

// console.log(m5, m6);
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple('huynh', 18);
const m8 = makeTuple('a', 'b');
const m9 = makeTuple<string, number>('j', 23);
const m10 = makeTuple<string | null, number>(null, 5);
// console.log(m9);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>('a', 8);
// console.log(m11);

// GENERICS EXTENDS
// const makeFullName = obj => ({
//   ...obj,
//   fullname: `${obj.firstName} ${obj.lastName}`
// });
const makeFullNameConstraint = (obj: { firstName: string, lastName: string }) => ({
  ...obj,
  fullname: `${obj.firstName} ${obj.lastName}`
});

const n1 = makeFullNameConstraint({firstName: 'Henry', lastName: 'Web dev'});
const makeFullNameConstraintWithGenerics = <T extends {firstName: string, lastName: string}>(obj: T) => ({
  ...obj,
  fullname: `${obj.firstName} ${obj.lastName}`
});
const n2 = makeFullNameConstraintWithGenerics({firstName: 'Henry', lastName: 'Web dev', age: 20, gender: 'Male'});
// console.log(n2);

const addNewEmployee = (employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid
  }
}
const employeeOne = addNewEmployee({name: 'Henry', age: 30});
// console.log(employeeOne);
const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid
  }
}
const employeeTwo = addNewEmployeeT({name: 'Huynh', age: 20});
// console.log(employeeTwo.name);

const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid
  }
}
const employeeThree = addNewEmployeeTWithConstraint({name: 'Huynh', age: 20});
console.log(employeeThree);

// GENERICS INTERFACE
interface Resource<T> {
  uid: number,
  name: string,
  data: T
}

type NumberResource = Resource<number[]>;

const numbers: NumberResource = {
  uid: 2,
  name: 'Lan',
  data: [1, 2, 3]
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: 'Huynh',
  data: 'Hello'
}

const resourceTwo: Resource<object> = {
  uid: 1,
  name: 'Huynh',
  data: {name: 'avenger'}
}

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: 'Dev',
  data: ['JS', 'HTML', 'CSS']
}
