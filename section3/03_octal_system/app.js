const digitsList1=[2,4,6,5];
const digitsList2=[7,3,2];

const octalNum1=0o12;

const octalNum2=0o237;



console.log(octalNum1);

console.log(octalNum2);




// const num1=2*1 + 4*10 + 6*100 + 5*1000;
// const num2=7*Math.pow(10,0) + 3*Math.pow(10,1) + 2*Math.pow(10,2);


function digitsToNumber(digits){
    return digits.reduce((acc,curr,index)=>acc+curr*Math.pow(10,index),0);
    
    // ((digit,index)=>{
    //     num+=digit * Math.pow(10,index);



   
    return num;
}

// console.log(num1);

// phele kudh ka nu,mber system hai
// console.log(num2);






//0o17 means in octal 15 yeh 0o yeh representaion hai octal kaaa aur suno if number will get increase more than 7 in any place it become normal





// parseInt(65342672,8) this method convert any number into octal decimal mai nhi dega convert karke if bracket mai 8 ki jagah 10 kardo toh koi fayda nhi;

//0 yeh lagad toh bhi hojaega convert
//0o yeh lagado toh bhi hojaega convert




//const num=123
// num.toString(8);  // output aega octal to binary mai convert hokar 173 aega


//decimal hai vo base 10 number system max 9
// octal ko base 8 bolte hai max 7

