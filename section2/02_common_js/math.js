function sum(...nums){
    return nums.reduce((curr,acc)=>curr+acc);
}



function product(...nums){
    return nums.reduce((curr,acc)=>curr*acc);
}


// console.log(module.exports)

// module.exports.sum=sum;
// module.exports.product=product;

//OR
exports.sum=sum;
exports.product=product;


// module.exports={
//     sum,
//     product
// };



// module.exports=[sum,product];


// module.exports='tanish';


// console.log(module.exports)

//module.exports by default ek object milta hai empty 