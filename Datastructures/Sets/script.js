// sets

const ids = new Set();

console.log(ids.add('abc'));
console.log(ids.add(1));
console.log(ids.add('bb2'));
console.log(ids.add(1));
console.log(ids.add('  '));
console.log(ids.add(2));

for ( const el of ids){
    console.log(el);
}

console.log(ids.has());

console.log(ids.has('  '));

console.log(ids.has('abc'));

ids.delete('  ');

console.log(ids);

const id1 = new Set('1','2','3');
console.log(id1);