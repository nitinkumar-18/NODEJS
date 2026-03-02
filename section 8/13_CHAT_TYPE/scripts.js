const response=await fetch("http://192.168.1.7:4000");

console.log({response});

// const data=await response.json();

// console.log(data);






const decoder=new TextDecoder();

for await (const chunk of response.body) {
    document.write(decoder.decode(chunk));
}