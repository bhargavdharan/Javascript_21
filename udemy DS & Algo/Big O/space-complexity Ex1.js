function boo(n){
    for (let i = 0; i < n.length; i++){
        console.log("booooo!")
    }
}

boo([1, 2, 3, 4, 5, 6])

// Space complexity ===> O(1)

let n = 6;
function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(n);

// Space complexity ===> O(n)