// find 1st, Find Nth...
const array = ['hi', 'my', 'teddy']; // O(n)

const array1 = [{
    tweet: 'hi',
    date: 2012
},
{
    tweet: 'my',
    date: 2014
},
{
    tweet: 'teddy',
    date: 2018
}]; //oldest tweet : hi, newest: teddy
// O(n^2)

let a = array[0]; // O(1)
let a1 = array1[0]; // O(1)
console.log(a)
console.log(a1)

let b = array[array.length - 1]; // O(1)
let b1 = array[array.length - 1]; // O(1)
console.log(b)
console.log(b1)
