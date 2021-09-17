const nemo = ["nemo"];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');


// Rule 1 --> Always see through worst case scenarios

function findNemo(array) {
//   let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
      console.log('Running...')
    if (array[i] === "nemo") {
        console.log("I found Nemo!");
        break;
    }
  }
//   let t1 = performance.now();
//   console.log("call to find Nemo took " + (t1 - t0) + " milliseconds");
}

// findNemo(nemo); //O(1) ----> Linear time    //call to find Nemo took 0.5 milliseconds
findNemo(everyone); //call to find Nemo took 0.30000000074505806 milliseconds
// findNemo(large); //call to find Nemo took 90.90000000037253 milliseconds
