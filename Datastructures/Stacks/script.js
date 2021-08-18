/* Stacks! */

// functions: push, pop, peek, length

// palindrome : it is word that is spelled the same forwards and backwards

var letters = [];  //this is our stack

var word = "racecar";

var rword = "";

//put letters of words into stack
for (var  i = 0; i < word.length; i++){
    let a = letters.push(word[i]);
    // console.log(a);
} 

// pop off the stack in reverse order
for ( var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if ( rword === word){
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " is not a palindrome")
}