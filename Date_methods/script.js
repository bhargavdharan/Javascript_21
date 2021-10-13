let date = new Date();

let today1 = date.toLocaleDateString();
let today2 = date.getFullYear();
let today3 = date.getMonth();
let today4 = date.getDate();

document.getElementById('date1').innerHTML = 'Today Date:\t'+today1;
document.getElementById('date2').innerHTML = 'Today Year:\t'+today2;
document.getElementById('date3').innerHTML = 'Today Month:\t'+today3;
document.getElementById('date4').innerHTML = 'Today Date:\t' + today4;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

document.getElementById('time1').innerHTML = hours + ":" + minutes + ":" + seconds;

