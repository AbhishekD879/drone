/**
Consider your mobile phone and represent it as an object. Create a method to display only the tech spec of it. Create a method that computes the remaining storage available

*/
const {log}=console;
console.clear()
let smartPhone={
    name:"Galaxy F13",
    modelNo:"SM-E135FZGDINS",
    Color:"Nightsky Green",
    os:"Android12",
    processor:"SDE 712",
    touch:true,
    storage:64,
    usedStorage:32,
    displayTech(){
        const curr={...this};
        delete curr["displayTech"];
        delete curr["remainingStorages"];
        console.table(curr);
    },
    remainingStorages(){
        return this.storage-this.usedStorage;
    }
}

smartPhone.displayTech();
console.log("Remaining Storage: "+smartPhone.remainingStorages());