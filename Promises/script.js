let car = new Promise(function(resolve, reject){
    // fuelFullTank = true;
    fuelFullTank = false;
    if(fuelFullTank)
    {
        resolve();
    }
    else{
        reject();
    }
});

car.then(function(){
    console.log("The fuel tank is full. Happy Driving!")
}).catch(function(){
    console.log("The fuel tank is not empty...")
})