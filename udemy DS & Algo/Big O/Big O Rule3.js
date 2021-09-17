// Rule 3 ---> Different terms for input

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });


  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// Simple trick -- (we have different arrays i.e, different notations for each array because we don't know the length)

// trick1 --> Any step that happens in the same indentation, so one after another, simply add

// trick2 --> Any step that happens that is nested , simply multiply
// Big O ==> O(a + b)
// Big O ==> O(a * b)

//-----------------------------------

// Log all pairs of array

// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(array) {
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length; j++){
//             console.log(array[i],array[j])
//         }
//     }
// }

// logAllPairsOfArray(boxes)

// Big O ==> O(n * n) ==> O(n^2)

// it's very horibble code

// it's pretty slow as the number of elements increases, the number of operations increases significantly

