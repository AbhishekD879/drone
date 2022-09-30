class Name{
    fname;
    lName;
    constructor(fireName,lastName){
        this.fName = fireName;
        this.lName = lastName;
    }
    get fullName(){
        return this.fName+" "+this.lName;
    }
    get initials(){
        return this.fName[0].toUpperCase()+"."+this.lName[0].toUpperCase();
    }

}
const name= new Name("Jhon","Doe")
console.log(name.fullName)
console.log(name.initials)
console.log(name.fName)
console.log(name.lName)