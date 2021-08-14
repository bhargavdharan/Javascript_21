//--------Function constructor------

var myFunction = new Function("a","b","return a+b");
var a = myFunction(5,25);
document.getElementById('demo2').innerHTML ="The sum is:" +a;