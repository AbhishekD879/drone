const validateEmail=email=>{
    const isValidEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const In_Email=document.getElementById("In_Email");
    isValidEmail?In_Email.classList.add("hidden"):In_Email.classList.remove("hidden");
    return isValidEmail;
}

const validatePassword=password=>{
   
    const isValidEPassword=/^[A-Za-z]\w{7,14}$/.test(password);
    const In_Password=document.getElementById("In_Password");
    isValidEPassword?In_Password.classList.add("hidden"):In_Password.classList.remove("hidden");
    return isValidEPassword;
}

const validatePhoneNumber=phone=>{
    
    const isValidPhone=+phone&&`${phone}`.length===10;
    
    const In_Phone=document.getElementById("In_Phone");
    isValidPhone?In_Phone.classList.add("hidden"):In_Phone.classList.remove("hidden");
    return isValidPhone;
}

const form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const {value:email}=document.getElementById("email");
    const {value:password}=document.getElementById("password");
    const {value:phone}=document.getElementById("phone");
    if(!email||!password||!phone){
        alert("Invalid Details");
    }else{


    if( !validateEmail(email)||
    !validatePassword(password)||
    !validatePhoneNumber(phone)){
        alert("Invalid details fun")
    }else{
        alert("Valid Inputs Form submmited")
    }
    }
    

})