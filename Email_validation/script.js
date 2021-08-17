function validate(){
    var mail = document.getElementById('text').value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    var a = regx.test(mail);
    if(a){
        alert("you have provided valid Email ID");
        return true;
    }else{
        alert('sorry! Incorrect Email ID')
        return false;
    }
}