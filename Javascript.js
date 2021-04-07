//Fonction Buy (Button Shop-Now)
//Page Home
function BuyShoes() {
    document.getElementById('AlertJs').style.display= 'block';
};
function ByElemant() {
    document.getElementById('ByElemant').style.display = 'block';
    document.getElementById('AlertJs').style.display= 'none';
}
//Page De Sign Up :
//fonction form
function inscription() {
    var a = document.getElementById("mail"),
        b = document.getElementById("Password"),
        Copa = document.getElementById("EmailCop"),
        Copb = document.getElementById("PasswordCop"),
        ErrorMsg = document.getElementById("ErrorMsg");
    
    if(a.value  == "" && b.value == "") {
        ErrorMsg.innerHTML = "Fill the registre Please";
    }
    else if(a.value  == "" || b.value == "") {
        ErrorMsg.innerHTML = "There is a empty field ";
    }
    else {
        document.getElementById('Result').style.display= 'block';
        Copa.innerHTML = a.value;
        Copb.innerHTML = b.value;
    }
}
//Close the header
function Close() {
    document.getElementById('Result').style.display= 'none';
}
//Button Saved 
function Saved() {
    var x = "Your account saved"
    document.getElementById("ImgSaved").innerHTML = x;
}
//Page d'inscription
//Fiche D'inscription :
function CreateAccount() {
    var a = document.getElementById("FirstName"),
        b = document.getElementById("LastName"),
        c = document.getElementById("Date"),
        d = document.getElementById("Email"),
        e = document.getElementById("Password"),
        Ce = document.getElementById("ConfirmPassword"),
        ErorMsg = document.getElementById("ErrorMsg");
    
    if(a.value == "" && b.value == "" && c.value == "" && d.value == "" && e.value == "" && Ce.value == ""){
        ErorMsg.innerHTML = "Please Fill the register";
    }
    else if(a.value == "" || b.value == "" || c.value == "" || d.value == "" || e.value == "" || Ce.value == ""){
        ErorMsg.innerHTML = "Please There is a Empty Filed";
    }
    else if(e.value != Ce.value) {
        ErorMsg.innerHTML = "Please Check your password";
    }
    else{
        document.getElementById('AlertMsg').style.display= 'block';
        document.getElementById('UserNameCop').innerHTML = d.value;
        document.getElementById('PasswordCop').innerHTML = e.value;
    }
}

function CloseAlert() {
    document.getElementById('AlertMsg').style.display= 'none';
}
//Page Forget password : 
function alertForgetPass() {
    var TextEmail = document.getElementById("TextEmail").value;
    if(TextEmail == "") {
        document.getElementById("ErrorMsgAlert").innerHTML = "Please Fil the Field"
    }
    else
    {
        document.getElementById("JsAlert").style.display = 'block';
    }
}
//Page Home :
//Animation
function AnimationHome() {
    document.getElementById('animation').style.display = 'block';
};
setTimeout(AnimationHome , 900)