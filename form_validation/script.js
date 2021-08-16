function validate(){
    if(document.myform.email.value == ""){
        alert("Please provide your Email ID");
        document.myform.email.focus();
        return false;
    }else if(document.myform.password.value == ""){
        alert("please provide your password");
        document.myform.password.focus();
        return false;
    }else{
        return true;
    }
}