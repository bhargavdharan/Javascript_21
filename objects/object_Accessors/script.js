var car1 = {
    model: "Audi Quattro 20v",
    color: "grey",
    fuel_type: "Diesel",
    get fuel(){
        return this.fuel_type
    },
};
document.getElementById("demo").innerHTML = car1.fuel;

var car2 = {
    model: "BMW 320d",
    color: "Navy blue",
    fuelType: "",
    set fuel(fuel){
        this.fuelType = fuel;
    }
}
car2.fuel = "petrol";
document.getElementById("demo1").innerHTML = car2.fuelType;