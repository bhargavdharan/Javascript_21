var student = {
    name: "Chris",
    age: 21,
    studies: "Computer science"
};
//-----different ways of accessing properties-------------
// student.age = 24;
// x = student.age;
x = "age";
// document.getElementById('demo').innerHTML = student.name + " of the age " + student.age + " studies " + student.studies + " in " + student.Nationality;
// document.getElementById('demo').innerHTML = student.name + " of the age " + x + " studies " + student.studies + " in " + student.Nationality;
document.getElementById('demo').innerHTML = student.name + " of the age " + student[x] + " studies " + student.studies + " in " + student.Nationality;