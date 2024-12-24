// common js modules(cjs) 
// - it uses module.exports & require
// - by default used in nodeJs
// - older way
// - synchronous
// - non strict mode

// ES Modules(mjs)
// - it uses import & export
// - by default used in react,angular
// - newer way
// - asynchronous
// - strict mode

// one module to another
// const obj=require('./sum')
// const {x,caluculateSum}=require('./calculate/sum');
// const {calculateMultiply}=require('./calculate/multiply');


// import { caluculateSum,greet } from "./sum.js";

const {calculateMultiply,caluculateSum}=require('./calculate');

var myName="Hritik Kumar";
console.log(myName)

// this works now
// obj.caluculateSum(5,3)
calculateMultiply(5,4)
caluculateSum(5,3) 

// console.log(greet)
// console.log(obj.x)