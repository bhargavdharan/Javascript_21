//-----Generator function--------

function* generateFn(){
    yield 1;
    yield 2;
    return 3;
}
let generator = generateFn();
let one = generator.next();
let two = generator.next();
let three = generator.next();
console.log(JSON.stringify(one));
console.log(JSON.stringify(two));
console.log(JSON.stringify(three));
document.getElementById('demo6').innerHTML = one;
// document.getElementById('demo7').innerHTML = two;
// document.getElementById('demo8').innerHTML = three;