const input = document.querySelector("input");


const decoder=new TextDecoder();


input.addEventListener("change", async() => {
  const file = input.files[0];


  const readStream=file.stream();

  const reader=readStream.getReader();

  // this is for await loop



  for await (const chunk of readStream){
    console.log(chunk);
  }



  


  // while(true){


  //   const {done,value}=await reader.read();

  //   if(done)break;

  //   console.log(value);

  // }


  // stream ke form mai browser ke upar read karna 

//  const result=await reader.read();

//  console.log (decoder.decode(result.value));

 
//  const result1=await reader.read();
//  console.log (decoder.decode(result1.value));




// const result2=await reader.read();
//  console.log (decoder.decode(result2.value));











// above code ka yeh output ayaa hai aur suno yeh done false means kuch baki rhegayaa read kanra
// {done: false, value: Uint8Array(22)}
// done
// : 
// false
// value
// : 
// Uint8Array(22) [84, 65, 78, 73, 83, 72, 32, 84, 65, 78, 68, 79, 78, 66, 65, 67, 75, 66, 65, 67, 75, 10, buffer: ArrayBuffer(22), byteLength: 22, byteOffset: 0, length: 22, Symbol(Symbol.toStringTag): 'Uint8Array']
// [[Prototype]]
// : 
// Object
// done agar false many data left to read







  // const str=await file.text();
  // console.log(str);
});
