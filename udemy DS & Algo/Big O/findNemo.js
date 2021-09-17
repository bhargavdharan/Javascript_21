// const nemo = ["nemo"];
// // const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// // const large = new Array(1000).fill('nemo');

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("I found Nemo!");
//     }
//   }
//   let t1 = performance.now();
//   console.log("call to find Nemo took " + (t1 - t0) + " milliseconds");
// }

// findNemo(nemo); //O(1) ----> Linear time    //call to find Nemo took 0.5 milliseconds
// findNemo(everyone); //call to find Nemo took 0.30000000074505806 milliseconds
// findNemo(large); //call to find Nemo took 90.90000000037253 milliseconds

//---------------------------------------------------------------------


let boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)  ---> constant time
    console.log(boxes[1]); // O(1)  ---> constant time
}
logFirstTwoBoxes(boxes); // O(2) ---> constant time

// function compressAllBoxes(boxes) {
//   let t0 = performance.now();

//   boxes.forEach(function (item) {
//     console.log(item);
//   });

//   let t1 = performance.now();
//   console.log("call to find Box took " + (t1 - t0) + " milliseconds");
// }
// compressAllBoxes(boxes)
