console.group("Sum module executed")


function caluculateSum(a,b){
    const sum=a+b;
    console.log(sum)
}

var x=100;

// module.exports=caluculateSum;

// module.exports={
//     x:x,
//     caluculateSum:caluculateSum,
// }

module.exports={
    x,
    caluculateSum,
}