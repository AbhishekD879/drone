class Circle{
    constructor(radius){
        this.radius=radius;
    }

    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getPerimeter(){
        return Math.PI*this.radius*2;
    }
}
const circle= new Circle(11)
console.log(circle.getArea())
console.log('====================================');
console.log(circle.getPerimeter());
console.log('====================================');