// objects

const person = {
  firstName: "Max",
  lastName: "Cooper",
  age: 31,
  hobbies: ["Sports", "Cooking", "Water surfing"],
  greet(){
      console.log('Hi, I am ' + this.firstName + " " + this.lastName);
  },
};

// for(const el of person){
//     console.log(el);
// }

// // output : TypeError: person is not iterable

console.log(person[0]); // undefined

console.log(person.firstName); // Max

person.nationality = "American";

console.log(person.nationality); // American

console.log(person);

/**
 * {
  firstName: 'Max',
  lastName: 'Cooper',
  age: 31,
  hobbies: [ 'Sports', 'Cooking', 'Water surfing' ],
  nationality: 'American'
}
 */

let a = delete person.nationality;

console.log(a);  // true

console.log(person);

/**
 * {
  firstName: 'Max',
  lastName: 'Cooper',
  age: 31,
  hobbies: [ 'Sports', 'Cooking', 'Water surfing' ]
}
 */

person.greet();
