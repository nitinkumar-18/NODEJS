

console.time();


const decoder=new TextDecoder();


const response=await fetch("http://localhost:9000/");

// below code mai pura code anee mai vo nhi rheta like vo chunks mai ataa hai otherwise json sai pura ataa hai data difficult hojata hai

const data=await response.text();
console.timeEnd();


// const data=await response.json();
// console.log(data);


// let i=0;
// for await (const chunk of response.body){

//   i++;


//   console.log(decoder.decode(chunk));
//   if(i==1){
//     console.timeEnd();

//   }

  // console.log(decoder.decode(chunk));
// }



// console.timeEnd();