const a=new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view1=new DataView(a);



const b=new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view2=new DataView(b);




const c=new ArrayBuffer(1.99 * 1024 * 1024 * 1024);

const view3=new DataView(c);



for( let i=0; i<view1.byteLength;i++){
   view1.setInt8(i,i+1);

view2.setInt8(i,i+1);

view3.setInt8(i,i+1);

}

console.log(a);


// view.setInt8(0,0xff);

// view.setInt8(1,127);

// view.setInt8(2,128);

// view.setInt8(3,135);


// yeh bhuat memeory legha niche wala loop bhaut storage legha
// for( let i=0; i<view.byteLength;i++){
//     view.setInt8(i,i+1);
// }
// console.log(view);




setInterval(()=>{
    console.log('RUNNING');
},2000);