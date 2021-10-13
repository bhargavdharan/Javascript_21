const strings = ['a', 'b', 'c', 'd'];
// 4 items * 4 = 16 bytes of storage

// access
let a = strings[2];
console.log(a);

// push
strings.push('e');  // O(1)

console.log(strings);

// pop
strings.pop(); // O(1)
strings.pop(); // O(1)

console.log(strings);

// unshift
strings.unshift('y');  // O(n)
strings.unshift('x');

console.log(strings);

// splice
strings.splice(2, 0, 'z');  // O(n/2)

console.log(strings);

