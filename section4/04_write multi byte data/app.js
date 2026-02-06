const a =new ArrayBuffer(4);

const view=new DataView(a);



// view.setInt16(0,257);
// console.log(view.getInt16(0));





// yeh bigEndian ki tarah read hota hai

// view.setInt16(0,260);// BE
// view.setInt16(2,260,true); //LE
// console.log(view.getInt16(0));
// console.log(view.getInt16(2,true));


console.log(a)
view.setInt32(0,0x7823e324)