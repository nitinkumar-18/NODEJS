
// import { mkdir } from "node:fs";
import { readFile } from "node:fs";
import {rename,copyFile,cp,unlink,rmdir,rm,mkdir,writeFile,stat,watch} from "node:fs/promises";


// cp("./src","/Users/tanishtandon/Desktop",{recursive:true});

// copyFile("streak.png","backend.png");

// rename("300.png","streak.png");


// copyFile("streak.png","backend.png")
// ;


// console.log('Renamed');


// copy 
// cp this method copies full directory
// copy read karega sirf single file 




// abh move ka dekhna hai toh uske liye rename use karte hai 

// move our backend.png to the desktop
// rename("backend.png","/Users/tanishtandon/Desktop");


// rename the file app.js to script.js
// rename("./app.js","script.js")













// move and rename karne ke liye rename method use hogha dono mai











// delete krna hota hai unlink method sai

// unlink("streak.png")













//rmdir delete empty directories
// rm delete jo empty nhi hai directories vo bhi delete


// import { rmdir } from "node:fs/promises";

// rmdir("testi");




// source wali directory dlete below command 
// rm('src',{recursive:true});












// create tanish.css file
// writeFile('tanish.css','')


// create folder
// mkdir('hi');


// yeh stats sabh kuch batadeta hai all details 

// const stats=await stat("app.js");
// console.log(stats);




//watch hamesha watch rakhta ha jo bhi filename ho uss par
// console.log("Watching file.txt 👀");

// watch("file.txt", (eventType, filename) => {
//   console.log("Event:", eventType, "File:", filename);
// });



watch("file.txt", async(eventType) => {
    if(eventType === "change"){
  console.log(await readFile ("file.txt","utf-8"));
    }
});