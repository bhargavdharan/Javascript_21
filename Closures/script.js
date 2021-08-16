var a = 10;
function firstFn(){
    var b = 20;
    function secondFn(){
        // var c = a+b;
        var c =20+a+b; // we can add direct values
        return c;
    }
    return secondFn();
}

var sum = firstFn();
document.getElementById("demo").innerHTML = firstFn + '<br>';
document.write("The sum is  " +sum + "<br>");
console.log("The sum is "+sum);