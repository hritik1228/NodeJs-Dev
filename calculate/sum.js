console.group("Sum module executed")

function caluculateSum(a,b){
    const sum=a+b;
    console.log(sum)
}

// var x=100;
// var greet="Good Evening"

// module.exports=caluculateSum;

// module.exports={
//     x:x,
//     caluculateSum:caluculateSum,
// }

// console.log(module.exports)

// module.exports.x=x;
module.exports={caluculateSum};

// module.exports={
//     x,
//     caluculateSum,
// }