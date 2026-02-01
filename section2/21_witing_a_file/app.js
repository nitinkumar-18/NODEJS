import { readFile, writeFile,appendFile } from 'node:fs/promises'


// fs.writeFile('file-1.txt','TANISH TANDON')

// agar writeFile phir sai chalae same file par toh yeh overwrite kardeta hai jo bhi likha hai if chaayeh kuch bhi ho naye sai replace hojaega

// fs.writeFile('file-1.txt','TANISH')

// yeh append wala feature uske aage sai hi add karega jo likha hai

// write and append dono agar file nhi hai toh create kardeete hai




// fs.appendFile('file-1.txt','\nBACK\n');






// yeh niche humne desktop sai file read ki hai 
// const contentBuffer=await readFile("/Users/tanishtandon/Desktop/file-1.txt",'utf-8');

// writeFile('file-1.txt',contentBuffer)












// abh hum yaha sai file desktop par lekar jaege
// const contentBuffer=await readFile("./300.png");

// console.log(contentBuffer);
// writeFile("/Users/tanishtandon/Desktop/3000.png",'utf-8');




















// setInterval(()=>{
//     writeFile("file-1.txt",new Date().toLocaleTimeString());
// },500);

















//isme kabhi kabar error ajata hai isliye use try catch block
try{
const contentBuffer=await readFile("./3007.png");
writeFile("/Users/tanishtandon/Desktop/3000.png",'utf-8');
}catch(err){
writeFile("error.log",`${new Date().toLocaleTimeString}\n${err.message}\n${err.stack}`);

console.log(err);
console.log(`To see full error go to error.log file`);
}





// small files we copy but we can't do this for big files we use stream or buffers for large files


// 🔴 error.log hota kya hai?

// error.log ek record file hoti hai jisme:

// errors

// warnings

// crashes

// unexpected behavior

// sab automatically likh liya jata hai by system / server / app.

// 🤔 Banane ki zarurat kyo padti hai?

// Socho ye situation:

// 👉 Tumhari website raat 2 baje crash ho gayi
// 👉 Tum so rahe ho
// 👉 Subah utho aur site down 😐

// Ab sawal: crash kyo hua?

// ➡️ Jawab milta hai error.log se ✅

// 🧠 error.log kya-kya batata hai?

// Mostly ye info hoti hai:

// ❌ kis file me error aaya

// 📍 kis line number par

// 🧩 error ka type (syntax, runtime, permission, etc.)

// ⏰ kab error aaya (timestamp)

// 🧪 kab-kab repeat hua

// Example:

// TypeError: Cannot read property 'name' of undefined
// at app.js:45


// Isse turant pata:

// problem kaha hai

// fix kya karna hai

// ⚙️ Kaha-kaha milta hai?

// Depends tum kya use kar rahe ho:

// 🌐 Web / Backend

// Node.js / Express

// PHP

// Django
// ➡️ Server automatically error.log banata hai

// 💻 System / OS

// Linux / macOS → /var/log/

// permissions, services ke errors

// 🛠️ Tools

// npm, node, apache, nginx

// database (MySQL, PostgreSQL)

// ❌ Agar error.log na ho toh?

// Bohot mushkil 😵

// sirf “Something went wrong” dikhega

// real reason nahi milega

// debugging blind ho jaayegi

// Isliye professional systems me logging MUST hoti hai