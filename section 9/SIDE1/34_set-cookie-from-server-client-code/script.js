const response=await fetch('http://localhost:2900',{
    credentials:"include"
})

const data=await response.json();
console.log(data);