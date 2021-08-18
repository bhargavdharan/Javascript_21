// Arrays

const names = ['Max', 'Mani','Julie','Max'];

// Accessing array elements by index values
console.log(names[1]);
console.log(names.length);

for (const el of names ){
    console.log(el);
}

names.push('Julie');
console.log(names.length);

const julieIndex = names.find( el => el === 'Julie');
console.log(julieIndex)

// deletes an element in array

names.splice(2,1);
console.log(names);