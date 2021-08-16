function toDisplay(msg){
    console.log(msg);
}




const myPromise = new Promise((resolve, reject) => {

    //--------waiting for a msg==>based on condition it displays msg
    // let x = 1;

    // if(x==0){
    //     resolve("OK");
    // }
    // else{
    //     reject("Error!");
    // }

    //--------waiting for a timeout==>based on timeout it displays msg
    setTimeout(function(){
        resolve("I Love You!");
    },3000);
    setTimeout(function(){
        reject("I hate You!");
    },4000);

    // --------waiting for a file
    //--just for knowledge---it not works on this file
    // let req = new XMLHttpRequest();
    // req.open("GET", "demo.html");
    // req.onload = function(){
    //     if(req.status == 200) {
    //         myCall(req.responseText);
    //     }else{
    //         myCall("Error:" + req.status);
    //     }
    // }
    // req.send();

});

myPromise.then(
    function (value){
        toDisplay(value);
        // getFile(value);
        
    },
    function(error){
        toDisplay(error);
        // getFile(value);
    }
);

