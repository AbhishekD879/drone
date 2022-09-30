const genrationMap={
    "-3":{f:"great grandmother",m:"great grandfather"},
    "-2":{m:"grandfather",f:"grandmother"},
    "-1":{m:"father",f:"mother"},
    "0":"me!",
    "1":{m:"son",f:"daughter"},
    "2":{m:"grandSon",f:"grandDaughter"},
    "3":{m:"great grandson",f:"great granddaughter"}
}

const getGenration=(index,gender)=>{
    if(index===0)return genrationMap["0"];
    return genrationMap[index][gender.toLowerCase()];
}
console.log(getGenration(2, "f")) //➞ "granddaughter"
 
console.log(getGenration(-3, "m"))// ➞ "great grandfather"
 
console.log(getGenration(1, "f"))// ➞ "daughter"
