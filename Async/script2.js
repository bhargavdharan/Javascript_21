function resolveAfter1s() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('resolved after 1s');
        },1000);
        // setInterval(function(){
        //     reject('rejected after 1s');
        //     console.log('1s rejected')
        // },1000);
        // setTimeout(function(){
        //     clearInterval();
        //     console.log('1s cleared')
        // },1000)
    });
}
function resolveAfter2s() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('resolved after 2s');
        },2000);
        // setInterval(function(){
        //     reject('rejected after 2s');
        //     console.log('2s rejected')
        // },2000);
        // setTimeout(function(){
        //     clearInterval();
        //     console.log('2s cleared')
        // },2000)
    });
}
function resolveAfter3s() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('resolved after 3s');
        },3000);
        // setInterval(function(){
        //     reject('rejected after 3s');
        //     console.log('3s rejected')
        // },3000);
        // setTimeout(function(){
        //     clearInterval();
        //     console.log('3s cleared')
        // },3000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter1s();
    console.log(result);
    const result1 = await resolveAfter2s();
    console.log(result1);
    const result2 = await resolveAfter3s();
    console.log(result2);
}

asyncCall();