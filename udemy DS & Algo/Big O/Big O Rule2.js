// Rule 2 ---> Remove constant items

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++){
        console.log('hi')
    }
}
// what is Big O of the function ?
// O(1 + n/2 + 100) ==> O(n/2 + 101) ==> O(n+101) ==> O(n)
// printFirstItemThenFirstHalfThenSayHi100Times();

//------------------------------------------------------------

function compressBoxesTwice(boxes) {
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });
    boxes.forEach(function (boxes) {
        console.log(boxes);
    });
}
// what is Big O of the function ?
// O(2n)
// Drop the constants
// O(n)