import {Buffer} from "buffer";

// const buffer1=Buffer.alloc(4500);
// const buffer2=Buffer.allocUnsafe(4500);

// allocUnsafe use karte hi koi bhi data fill kardo otherwise hamare koi sensitive inform rhejaegi aur leak ho skti hai


// console.log(buffer1.toString());
// console.log(buffer2.toString());




// kuch print nhi hogha
// console.log(buffer1.toString());
// console.log(buffer2.toString());

// console.log(buffer1);
// console.log(buffer2);   
//<Buffer 00 00 00 00>
//<Buffer 00 00 00 00>




















console.time('Buffer.alloc');
for(let i=0;i<100000;i++){
    Buffer.alloc(1024);
}

console.timeEnd('Buffer.alloc');




console.time('Buffer.allocUnsafe');
for(let i=0;i<100000;i++){
  Buffer.allocUnsafe(1024);
}


console.timeEnd('Buffer.allocUnsafe');



// above code run give this output. barr barr run karo kabhi koi jyada toh kabhi koi 
// Buffer.alloc: 27.401ms
// Buffer.allocUnsafe: 6.83ms


// Buffer.allocUnsafe. yeh tabh use karte hai jabh barr buffers create karne aur performance ki need ho thoda dhyan sai use karna kyoki milte hi value assign kardena 

// alloc save kuch nhi karna hota value assign nhi karta bss zero assign karne ke chakar mai delay hota hai









