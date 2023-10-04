// const rectObj={
//     name:'Rectangle',
//     width:10,
//     height:10
// }

// let descriptor=Object.getOwnPropertyDescriptor(rectObj, 'name')
// console.log(descriptor);


const rectObj={
    name:'Rectangle',
    width:10,
    height:10
}
Object.defineProperty(rectObj, 'name',{
    writable:false,
    configurable:false,
    enumerable:false,
})

let descriptor=Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptor);