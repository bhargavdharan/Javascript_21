var student = {
    name: "Chris",
    age: 21,
    studies: "Computer Science",
    Nationality: "America",
};
document.getElementById('demo').innerHTML = student.name + " of the age " + student.age + " studies " + student.studies + " in " + student.Nationality;
console.log(student);

var student1 = new Object();
student1.name = "Mike",
student1.age = 21,
student1.studies = "Computer science",
student1.Nationality = "London"
document.getElementById('demo1').innerHTML = student1.name + " of the age " + student1.age + " studies " + student1.studies + " in " + student1.Nationality;

function stud(name,age,studies,Nationality){
    this.name = name;
    this.age = age;
    this.studies = studies;
    this.Nationality = Nationality;
}
var student2 = new stud("Ram",21,"Computer science","NewZealand")
document.getElementById('demo2').innerHTML = student2.name+ " of the age " + student2.age + " studies " + student2.studies + " in " + student2.Nationality;
console.log(student2);