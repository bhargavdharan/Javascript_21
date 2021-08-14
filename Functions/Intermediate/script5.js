//----Functions as objects-----
var body = "return Math.PI * rad * rad";
var circle = new Function("rad",body);
a1 = circle(5);
console.log(a1);


document.getElementById('demo4').innerHTML = 'The Area of a circle:' +a1;