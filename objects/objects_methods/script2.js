let user = {
    name: "Chris",
    age: 24,
};
function sayHi(){
    alert("Hello");
}
user.message = sayHi;
document.getElementById('demo').innerHTML = " Hi " + user.name;
document.getElementById('click me').onclick =  user.message;