const mostSweetIcecream=(args)=>{
    args=args.map((val)=>val.Sweetness);
    return Math.max(...args);
}

class IceCream{
    sweetnessChart= {
        
            "plain":0,
            "vanilla":5,
            "chocolatechip":5,
            "strawberry":10,
            "chocolate":10
}
    constructor(flavor,numsprinkle){
        this.flavor = flavor;
        this.numsprinkle = numsprinkle;
        console.log(`${this.flavor} with ${this.numsprinkle} sprinkles gives ${this.Sweetness} sweetness`);
    }
    get Sweetness(){
        // console.log(this.sweetnessChart[this.flavor.toLowerCase()])
        return this.sweetnessChart[this.flavor.toLowerCase()]+this.numsprinkle;
    }
}

ice1 = new IceCream("Chocolate", 13)     	// value of 23
ice2 = new IceCream("Vanilla", 0)       	// value of 5
ice3 = new IceCream("Strawberry", 7)    	// value of 17
ice4 = new IceCream("Plain", 18)         	// value of 18
ice5 = new IceCream("ChocolateChip", 3)  	// value of 8

console.log(mostSweetIcecream([ice1, ice2, ice3, ice4, ice5]) )
 
console.log(mostSweetIcecream([ice3, ice1]))
