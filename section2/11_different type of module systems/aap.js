
//native module or core module 
// import fs from 'fs';
import fs from 'node:fs'




//user module
import {num} from "./math.js";

//type of fs is object




// many more types of modules exist
// native modules or core modules

import fs from "node:fs";
import net from "node:net";
import dgram from "node:dgram";
import http from "node:http";
import https from "node:https";
import child_process from "node:child_process";
import cluster from 'node:cluster';
import zlib from "node:zlib";
import worker_threads from "node:worker_threads";
import crypto from "node:crypto";



// saabh binary mai hai import ho rha hai main node module hai sabh




// NPM MODULES



import axios from "axios";
console.log(fs); 



// npm module and core modules mai path dene ke liye jarurat nhi esse hi chal jaega vo bss naam dedo



























// 🧩 Module kya hota hai?

// Module = code ka ek chhota independent part
// jo ek specific kaam karta hai
// aur jise hum reuse kar sakte hain.

// 📦 Socho:

// pura app = factory

// module = ek machine

// हर machine ek kaam karti hai:

// ek machine add karti hai

// ek machine subtract karti hai

// ek machine API call karti hai

// Example:
// // math.js
// function add(a,b){
//   return a+b;
// }

// module.exports = add;

// // app.js
// const add = require('./math');
// console.log(add(2,3));


// 👉 math.js = module
// 👉 app.js = module
// 👉 har file Node.js me module hoti hai 💯

// 🔥 Node.js me modules ke 3 type hote hain
// 1️⃣ Core Module (Native Module) ✅

// Jo Node.js ke saath by default aate hain
// install nahi karna padta ❌

// Examples:
// fs      (file system)
// path
// http
// https
// os
// crypto
// events
// stream

// Use:
// const fs = require('fs');
// const path = require('path');


// 👉 npm install ❌
// 👉 direct require/import ✅

// Isliye inhe bolte hain:

// core module

// native module

// built-in module
// (3 names, same meaning)

// 2️⃣ User-defined Module 👨‍💻

// Jo tum khud banate ho

// Example:
// // math.js
// function add(a,b){
//   return a+b;
// }
// module.exports = add;

// // app.js
// const add = require('./math');


// 👉 ./math = user module
// 👉 ./ = current folder

// 3️⃣ Third-party Module (npm module) 📦

// Jo npm se install hote hain

// Examples:
// axios
// express
// mongoose
// chalk
// nodemon
// react

// Install:
// npm install axios

// Use:
// const axios = require('axios');

// 🧠 Visual Mind Map 🧠
// MODULES
// │
// ├── Core / Native Modules
// │     ├ fs
// │     ├ path
// │     ├ http
// │     └ os
// │
// ├── User Modules
// │     ├ math.js
// │     ├ aap.js
// │     └ utils.js
// │
// └── Third-party Modules (npm)
//       ├ axios
//       ├ express
//       ├ mongoose
//       └ nodemon

// 🧠 Node.js ka golden rule:

// Har file = module
// Node.js me koi bhi file global nahi hoti
// sab isolated hoti hai

// 🔥 Real-life analogy 😄
// Core modules = Factory machines 🏭

// (already installed)

// User modules = Tumhari khud ki machines 🛠️

// (tum banate ho)

// npm modules = Bahar se khareede hue machines 🛒

// (install from market)

// 🎯 1 Line Definition:

// A module is a reusable piece of code.
// Node.js modules are of 3 types:
// core modules, user-defined modules, and third-party modules.

// 🧠 Interview Q ready answer:

// Q: Types of modules in Node.js?
// A: Core modules, user-defined modules, and third-party modules.

// 🔥 Bonus (ES Module version):
// // core
// import fs from 'fs';

// // user
// import add from './math.js';

// // npm
// import axios from 'axios';


