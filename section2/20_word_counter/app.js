import {readFile} from "node:fs/promises";

const filePath=process.argv[2]

const fileContent=await readFile('./file-1.txt','utf-8');

console.log(process.argv);

// // 
// console.log(process.argv);   issai jo file doge uske words count hokar aege file path deta hai

const wordsArray=fileContent.split(/[\W]/).filter(((w)=>w));

const wordsCount={}



wordsArray.forEach((word)=>{
    if(word in wordsCount){
        wordsCount[word]+=1;
    }

    else{
        wordsCount[word]=1;
    }
});

console.log(wordsCount);


//   /W ka means hai jo non word characters hai unko break karna
