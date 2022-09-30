 class Holiday {
      name;
      day;
      month;
    getName() {
        return this.name;
    }

      getDay() {
        return this.day;
    }

      getMonth() {
        return this.month;
    }

      
    constructor(name,  day,  month){
        this.name=name;
        this.day=day;
        this.month=month;
    }
     inSameMonth(holiday){
        return this.month===holiday.getMonth();
    }
     avgDate(holidays){
        let sum=0;
       holidays.forEach((holiday)=>holiday.getDay())
        return sum/holidays.length;
    }
}

const diwali= new Holiday("diwali",5,"sep")
console.log(diwali.inSameMonth(new Holiday("cre",6,"Aug")))