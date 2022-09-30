console.clear();
const {log}=console;
// const person={
//     firstName:"Abhishek",
//     LastName:"Diwate",
//     age:22
// }
// log(`My name is ${person.firstName} ${person.LastName} and I am ${person.age} years old`);
// function getAccess(role){
//     switch(role.toLowerCase()){
//         case "Master".toLowerCase():
//             log("view/add/delete/create/update content");
//             break;
//         case "Admin".toLowerCase():
//             log("view/create");
//             break;
//         case "User".toLowerCase():
//             log("view/edit");
//             break;
//         default: log("Invalid Role");            
//     }
// }

// function getAccessConditional(role){
//    if(role.toLowerCase()==="Admin".toLowerCase()){
//     log("view/create")
//    }
//    if(role.toLowerCase()==="Master".toLowerCase()){
//     log("view/add/delete/create/update content")
//    }
//    if(role.toLowerCase()==="User".toLowerCase()){
//     log("view/edit")
//    }
// }

const canUserMakepurchase=({isLogged,isEmailVerified,isCardValid})=>{
        return isLogged && isEmailVerified && isCardValid;
}
const canUserAcces=({google,github})=>{
    return google||github;
}
const canUserStatus={google:true,github:true};
const isAuthenticated=()=>{
    return canUserAcces(canUserStatus);
}

const userMeta={

    isLogged:true,
    isEmailVerified:true,
    isCardValid:true,
}


log(isAuthenticated()?"logout":"login/signUp");
canUserAcces(canUserStatus);
log(canUserMakepurchase(userMeta)?"Can make purchase": "Cannot make purchase")
// getAccessConditional("Master");
// getAccess("Admin")
const countries=["INDIA","US","UK"]
countries.find((val)=>val.toLowerCase()==="india");