// # Reference type
var number1 = 1;
var number2 = 1;

var object1 = { value: 10 };
console.log("object1: \t"+object1);

var object2 = object1;
console.log("object2: \t"+object2);

var object3 = { value: 10 };
console.log("object3: \t"+object3);

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);

console.log([] === []); // false

// # context type

// function b() {
//     let a = 4;
// }
// b();

// console.log(this);
// console.log(this === window);
// this.alert('hello');
// function a() {
//     console.log(this);
// }
// a();

// const object4 = {
//     a: function () {
//         console.log(this)
//     }
// }

