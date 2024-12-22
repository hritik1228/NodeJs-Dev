// one module to another
require('./sum')

var x="Hritik Kumar";
console.log(x)

// this won't work, Modules protects thier variable and function from leaking  --> calculateSum is not defined
caluculateSum(5,3)