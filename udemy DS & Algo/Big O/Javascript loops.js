const nemo = ["nemo"];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array) {

 for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("I found Nemo!");
    }
    };
};

findNemo(everyone);

const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log("Found Nemo!")
        }
    });
}
findNemo2(everyone);


const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log("Found Nemo!")
        }
    }
}

findNemo3(everyone);