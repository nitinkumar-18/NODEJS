const digitsList1=[2,4,6,5];
const digitsList2=[7,3,2];

const octalNum1=0o12;

const octalNum2=0o237;


const hexNum1=0x843;
const hexNum2=0x45A; // or 0x45a both same



const binNum1=0b10;

console.log(hexNum1);
console.log(hexNum2);
// hexadecimal used in buffers also in colors




console.log(octalNum1);

console.log(octalNum2);




// const num1=2*1 + 4*10 + 6*100 + 5*1000;
// const num2=7*Math.pow(10,0) + 3*Math.pow(10,1) + 2*Math.pow(10,2);


// function digitsToNumber(digits,radix=10){
//     return digits.reduce((acc,curr,index)=>acc+curr*Math.pow(radix,index),0);
    
    // ((digit,index)=>{
    //     num+=digit * Math.pow(10,index);



   
    // return num;
// }

// console.log(digitsToNumber(digitsList2,8));

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







// this logic is basically for all(decimal / octal /hex)

function digitsToNumber(digits,radix=10){
    return digits.reduce((acc,curr,index)=>{
        let value;

        if(typeof curr === 'number'){
            value=curr;
        }
        else if(typeof curr ==='string'){
            value=parseInt(curr,radix);
        }
        if (isNaN(value) || value >= radix) {
            throw new Error(`Invalid digit '${curr}' for base ${radix}`);
        }


        return acc + value * Math.pow(radix, index);
    }, 0);
}

   console.log(digitsToNumber([7, 3, 2], 8)); 
// 2*64 + 3*8 + 7 = 159

console.log(digitsToNumber(['a', 3, 7], 16)); 
// a = 10 → 10*1 + 3*16 + 7*256 = 1850


// binary represent by 0b10=2

// math mai base ko radix bolte hai
// koi bhi number system bana skte hai inn charo ke alwaawa
// ex parseInt('211',3) base 3 here see
