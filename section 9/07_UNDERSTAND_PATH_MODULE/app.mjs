import path from "node:path";


// mjs isliye toh package.json karne ki jarurat ni hai import directly karskte ho

// console.log(
// path.join('/test','/hello'));
//output.   /test/hello

 //both correct up and low code  join lots of path 
// console.log(
// path.join('test','hello','hi'));







// remove extra slash
// console.log(path.normalize('./hi/hello///test///ggg'));




//.         ./hi=hi   and. /hi=/hi











// join method apka normalize bhi karta hai sath sath



//.   starting mai / slash means root directory mai jana hai uske upar kuch nhi hai isliye /test ayaa output

// console.log(path.normalize("/../../../test"))
// iska output. /test


// console.log(path.normalize("../../../test"))
// iska output ../../../test








//path.resolve('TANISH') // yeh current working directory mai tanish add kardega 
//console.log(process.cwd());



// console.log(process.cwd());
// console.log(path.resolve('/HELLO','test'));
// yeh cwd mai apka /HELLO/test hogha add 



// console.log(path.basename('./test/images/hello.png'));
// for file name output is hello.png



// console.log(path.dirname('./test/images/hello.png'));
// ./test/images. for directory name










// Function	Purpose
// join()	path parts combine karta hai
// resolve()	absolute path banata hai
// normalize()	path clean karta hai
// dirname()	folder path deta hai
// basename()	file name deta hai














// 1️⃣ Absolute Path

// Absolute path = file ya folder ka complete address from root directory.

// Yeh current folder par depend nahi karta.

// Example (macOS / Linux)
// /Users/tanish/Documents/project/file.txt






// 2️⃣ Relative Path

// Relative path = file ka path current directory ke relative hota hai.

// Yeh current location par depend karta hai.

// Example
// ./file.txt

// Meaning:

// current folder → file.txt