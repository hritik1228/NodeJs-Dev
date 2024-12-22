// one module to another
const obj=require('./sum')
// const {x,caluculateSum}=require('./sum')


var x="Hritik Kumar";
console.log(x)

// this works now
obj.caluculateSum(5,3)

console.log(obj.x)