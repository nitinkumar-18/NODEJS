#!/usr/bin/env node

const fs=require("fs");

const args=process.argv.slice(2);


if (args.length !== 2) {
  console.log("Usage: copy <source> <destination>");
  process.exit(1);
}






const [source,destination]=args;

try{
    const data=fs.readFileSync(source,'utf-8');
    fs.writeFileSync(destination,data);

      console.log(`✅ Data copied from ${source} to ${destination}`);
}catch (error) {
  console.error("Error:", error.message);
}



// “This program demonstrates how to build a custom Node.js CLI tool using process.argv, fs module, and shebang.”