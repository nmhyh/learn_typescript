var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1);
var l2 = last(['a', 'b']);
var lastT = function (arr) { return arr[arr.length - 1]; };
var lastT1 = lastT([1, 2, 3]);
var lastT2 = lastT(['a', 'b']);
var lastT3 = lastT(['d', 'e']);
// console.log(lastT1, lastT2, lastT3);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// console.log(m);
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('a');
var m4 = makeArrT(123);
// console.log(m3);
var makeArrXY = function (x, y) { return [x, y]; };
var m5 = makeArrXY(5, 6);
var m6 = makeArrXY('a', 6);
// console.log(m5, m6);
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('huynh', 18);
var m8 = makeTuple('a', 'b');
var m9 = makeTuple('j', 23);
var m10 = makeTuple(null, 5);
// console.log(m9);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault('a', 8);
// console.log(m11);
// GENERICS EXTENDS
// const makeFullName = obj => ({
//   ...obj,
//   fullname: `${obj.firstName} ${obj.lastName}`
// });
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullname: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'Henry', lastName: 'Web dev' });
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullname: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n2 = makeFullNameConstraintWithGenerics({ firstName: 'Henry', lastName: 'Web dev', age: 20, gender: 'Male' });
// console.log(n2);
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employeeOne = addNewEmployee({ name: 'Henry', age: 30 });
// console.log(employeeOne);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employeeTwo = addNewEmployeeT({ name: 'Huynh', age: 20 });
// console.log(employeeTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var employeeThree = addNewEmployeeTWithConstraint({ name: 'Huynh', age: 20 });
console.log(employeeThree);
var numbers = {
    uid: 2,
    name: 'Lan',
    data: [1, 2, 3]
};
var resourceOne = {
    uid: 1,
    name: 'Huynh',
    data: 'Hello'
};
var resourceTwo = {
    uid: 1,
    name: 'Huynh',
    data: { name: 'avenger' }
};
var resourceThree = {
    uid: 1,
    name: 'Dev',
    data: ['JS', 'HTML', 'CSS']
};
