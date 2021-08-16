//---Global scope ==> Any variable declared outside the function belongs to global scope and it can be accessible from anywhere in your code.
//---Local scope ===> Any variable declared within a function belongs to local scope and it is only accessible from that function and any of its nested functions.
// Note: global scope execute faster than local scope.

var a = 10; //--Global scope
function myFn(){
    var b = 20;//--local scope
    document.write(a+b +"<br>")
    console.log(a+b);
    console.log(a);
    console.log(b);
}
console.log(a);
// console.log(b);  // it will not access due to locally scoped.
myFn();