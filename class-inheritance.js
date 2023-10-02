// //parent class
// class Shape{
//     constructor(name){
//         this.name=name;
//     }
//     logName(){
//         console.log('Shape Name:' + this.name);
//     }
// }

// //subclass
// class Rectangle extends Shape{
//     constructor(name, height, width){
//         super(name)

//         this.height=height;
//         this.width=width
//     }
// }
// class Circle extends Shape{
//     constructor(name, radius){
//         super(name)

//         this.radius=radius;
//     }
//     //over writing logName
//     logName(){
//         console.log('Circle Name:' + this.name);
//     }
// }


// const cir= new Circle('Circle',2)
// const rect= new Rectangle('Rectangle',20,20)
// rect.logName();
// cir.logName();