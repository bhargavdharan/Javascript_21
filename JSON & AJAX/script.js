//Defining objects
var myCat = {
    "name" : "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
}
//---- Accessing objects ---
// myCat.name;

//Defining Arrays
var  myFavColors = ["blue","green","purple","orange"];
//--- Accessing objects ---
// myFavColors[1]

//----Defining json-----
// JSON ==> javascript object Notation
var thePets = [
    { "name" : "Meowsalot",
    "species": "cat",
    "favFood": "tuna"},
    { "name" : "Barky",
    "species": "Dog",
    "favFood": "carrots"}
]

//---Accessing data in json---
var a = thePets[0].favFood;
console.log(a);

// //----Defining Ajax----
// // AJAX ==> Asynchronous Javascript And XML
// var ourRequest = new XMLHttpRequest();
// // open method is passed with two arguments 1.pass tha data(POST) 2.receive the data(GET)
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     // console.log(ourRequest.responseText);
//     // var ourData = ourRequest.responseText; //it only gives bracket
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData[0]);
// };
// ourRequest.send();

var pageCounter = 1;

var animalContainer = document.getElementById('animal-info');

var btn = document.getElementById('btn');
btn.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' +pageCounter+ '.json');
    ourRequest.onload = function(){
        if(ourRequest.status >= 200 && ourRequest.status <400){
            var ourData = JSON.parse(ourRequest.responseText);
            // console.log(ourData[1]);
            renderHTML(ourData);
        }else{
            console.log("We connected to the server, but it is returned in error!")
        }

    };

    ourRequest.onerror = function(){
        console.log("Connection error......");
    };

    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

// add html to the page
function renderHTML(data){
    var htmlString = ' ';

    for(var i=0; i<data.length; i++){
        htmlString += '<p>' + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for(var ii=0; ii<data[i].foods.likes.length; ii++){
            // htmlString += data[i].foods.likes[ii];
            if(ii==0){
                htmlString += data[i].foods.likes[ii];

            }else{
                htmlString += " and " +data[i].foods.likes[ii];

            }
        }

        htmlString += ' and dislikes ';

        for(var ii=0; ii<data[i].foods.dislikes.length; ii++){
            // htmlString += data[i].foods.likes[ii];
            if(ii==0){
                htmlString += data[i].foods.dislikes[ii];

            }else{
                htmlString += " and " +data[i].foods.dislikes[ii];

            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString);

}
