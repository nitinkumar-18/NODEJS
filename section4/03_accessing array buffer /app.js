const a=new ArrayBuffer(4)
const view=new DataView(a);


view.setInt8(0,0xff)


view.setInt8(1,127);


// view.setInt8(1,0b1010000)


// view.setInt8(2,0x50)


// view.setInt8(3,0o120)


// console.log(a);


console.log(view.getInt8(0));//-1
// getInt8 reads value as signed



console.log(view.getInt8(1))


// getUint8 reads value as unsigned
console.log(view.getUint8(0));//255

console.log(view.getUint8(1))



// signed -128 to 127
// unsigned 0 to 255


// view.getInt8(-1). // signed
// view.getUInt(0). // unsigned

// bytelength[kitne byte ka length hai]