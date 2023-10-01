// const rectangle = {
//     name: 'rectangle',
//     width: 10,
//     height: 10,
//     area: function () {
//         return this.height * this.width;
//     }
// }

// console.log(rectangle.area());

// constructor................................................

// function Rectangle(name, width, height) {     //first letter of constructor function must be capital letter
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.width * this.height;
//     }
// }

// const rec1 = new Rectangle('Rectangle1', 10, 20);
// const rec2 = new Rectangle('Rectangle2', 5, 10);
// const rec3 = new Rectangle('Rectangle3', 5, 20);

// console.log(rec1.area(), rec2.area(), rec3.area());
// console.log(`area of rec1 is ${rec1.area()} rec2 is ${rec2.area()} & rec3 is ${rec3.area()}`); 
// console.log(rec1.constructor);

// const arrLit=[1,2,3,4,5];
// const arrObj=new Array(1,2,3,4,5);

// console.log(arrLit, typeof arrLit);
// console.log(arrObj, typeof arrObj);

// const obj1={};
// const obj2=new Object();

// console.log(obj1, typeof obj1);
// console.log(obj2, typeof obj2);


// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.width * this.height;
//     }
// }

// const rec4 = new Rectangle('Rectangle4', 10, 20);
// const rec5 = new Rectangle('Rectangle5', 5, 10);

// // console.log(rec4.name, rec5.area()); //access with dot notation
// // console.log(rec5["name"]);  //access with bracket notation

// //adding property on constructor function
// rec4.color = 'red';
// rec4.perimeter = () => 2 * (rec4.width + rec4.height)
// console.log(rec4);
// console.log(rec4.perimeter());

// //delete a property from a constructor function
// delete rec4.perimeter;

// //check for property
// console.log(rec4.hasOwnProperty('width'));
// console.log(rec4.hasOwnProperty('perimeter'));

// //get keys
// console.log(Object.keys(rec4));

// //get values
// console.log(Object.values(rec4));

// //get entries
// console.log(Object.entries(rec4));

// for (let [key, value] of Object.entries(rec4)) {
//     console.log(`${key}-${value}`);
// }

// //area function ke bad diye key and value
// for (let [key, value] of Object.entries(rec4)) {
//     if (typeof value != 'function') {              //jodi value ar type kono function hoy tahole setake bad diye baki gulo
//         console.log(`${key}-${value}`);
//     }
// }


//////////////////////// The prototypes //////////////////////

// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.width * this.height;
//     }
// }

// const rec1=new Rectangle('shahin', 5, 10)
// console.log(Object.getPrototypeOf(rec1));