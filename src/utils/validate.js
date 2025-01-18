

export var validateSignInData = (email,password) => {
    var isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    var isPasswordValid = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/.test(password);
    if((isEmailValid === false) && (isPasswordValid === false)){
        return "Email ID and Password not valid";
    }
    if(isEmailValid === false){
        return "Email ID not valid";
    }
    if(isPasswordValid === false){
        return "Password not valid";
    }
    return null;
}

export var validateSignUpData = (email,password,name) => {
    var isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    var isPasswordValid = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/.test(password);
    var isNameValid = /^[a-zA-Z ]+$/.test(name);
    if((isEmailValid === false) && (isPasswordValid === false) && (isNameValid === false)){
        return "Email ID,Password & Name not valid";
    }
    if(isEmailValid === false){
        return "Email ID not valid";
    }
    if(isPasswordValid === false){
        return "Password not valid";
    }
    if(isNameValid === false){
        return "Name not valid";
    }
    return null;
}

