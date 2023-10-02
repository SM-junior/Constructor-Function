///////////////////////// constructor function//////////////////
// function Rectangle(name, height, width) {
//     this.name = name;
//     this.width = width;
//     this.height = height
// }
// Rectangle.prototype.area = function () {
//     return this.height * this.width;
// }
// Rectangle.prototype.perimeter = function () {
//     return 2 * (this.height + this.width)
// }
// Rectangle.prototype.isSquare = function () {
//     return this.height == this.width;
// }
// Rectangle.prototype.logArea = function () {
//     console.log("Rectangle Area:" + this.area());
// }

// const square= new Rectangle('Square', 20,20)
// console.log(square);

///////////////////////// class constructor//////////////////
class Rectangle{
    constructor(name, height, width){
        this.name = name;
        this.width = width;
        this.height = height
    }
    area(){
        return this.height * this.width;
    }
    perimeter(){
        return 2 * (this.height + this.width)
    }
    isSquare(){
        return this.height == this.width;
    }
    logArea(){
        console.log("Rectangle Area:" + this.area());
    }
}
const square= new Rectangle('Square', 20,20)
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());
square.logArea()
