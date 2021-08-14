//----Predefined functions------

//eval()
//--evaluates strings and returns a value.

let A = 5;
let B = 6;
let C = 7;
let X = eval("A+B");
let Y = eval(new String("A+B"));
console.log(Y.toString());
let Z = eval('2+2') === eval('4');
let W = eval('2+2') === eval(new String('2+2'));
console.log(X);
console.log(Y);
console.log(Z);
console.log(W);
document.getElementById('demo7').innerHTML = X;
document.getElementById('demo8').innerHTML = Y;
document.getElementById('demo9').innerHTML = Z;
document.getElementById('demo10').innerHTML = W;


//parseInt()

var a1 = parseInt("10.01")
var b1 = parseInt("10.88")
var c1 = parseInt("10.90")
var n = a1 + b1 +c1;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(n);
document.write("<br>"+ "Result of parseInt " +n);

//parseFloat()

var a2 = parseFloat("10.01");
var b2 = parseFloat("10");
var c2 = parseFloat("34 45 66");
var d2 = parseFloat("40 years");
var n = a2 + b2 + c2 + d2;
console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
console.log(n);
document.write("<br>"+ "Result of parseFloat " +n);

//escape()
//--> it encodes a string and special characters with exception of: * @ - _ + . /

document.write("<br>" + "Need tips? visit myWorld solution!");
document.write(escape("<br>" + "Need tips? visit myWorld solution!"))


