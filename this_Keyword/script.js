// In a function, by default, this refers to the Global object.

// In strict mode, this is undefined, because strict mode does not allow default binding:

// undefined

let value1 = 50;

function myFn(){
    var value2 = 100;
    console.log("Value: " + value2);
    console.log("This value: " + this.value1);
}
myFn();

var a = 45
function show(){

    console.log(this === undefined);
    console.log(this.a);
}
show();

function render(){
    var b = 45
    console.log(this === undefined);
    function value(){
        console.log(this === undefined);
        console.log(this.b);
    }
   value();
}
render();

