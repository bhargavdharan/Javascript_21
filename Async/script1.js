//---checking for result---by using async and promises

let result = function(score){
    return new Promise(function(resolve, reject){
        console.log("Calculation results....");
        if(score > 50){
            resolve("Congratulations! you have passed");
        }
        else{
            reject("You are failed..");
        }
    })
}

let grade = function(response){
    return new Promise(function(resolve, reject){
            console.log("Calculating your grade...");
            resolve("Your grade is A. " +response);
    })
}

// result(80).then(response => {
//     console.log("Results received");
//     return grade(response);
// }).then(finalGrade => {
//     console.log(finalGrade);
// }).catch(error => {
//     console.log(error);
// })

async function calculateResults(){
    try{
        const response = await result(80);
        console.log("Results received")
        const finalGrade = await grade(response);
        console.log(finalGrade);
    }
    catch(error)
    {
        console.log(error);
    }
}
calculateResults();