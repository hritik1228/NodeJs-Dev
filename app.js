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
const data=require('./data.json');

var myName="Hritik Kumar";
console.log(myName)
console.log(data)
// this works now
// obj.caluculateSum(5,3)
calculateMultiply(5,4)
caluculateSum(5,3) 

// console.log(greet)
// console.log(obj.x)

// How are variable and functions private in different modules?
// require('./path)
// All the code of the module is wrapped inside a function
// this is normal function it's known as IIFE -> Immediately Invoked Function Expression

(function (){
    // All the code of the module runs inside this function
})();

// IIFE
// It immediately invoke the code
// It keeps your variable and functions safe, the code will not interfere same variable name outside the IIFE can be set 


// How do you get access to module.exports?
// Nodejs passess module as a parameter to the IIFE
// (function (module,require){

// })();


