// const timer=require('./timer.js');// work happen in js main thread common js

// import timer from './timer.js'; // this is es6 make another file and excecute  main thread not block in this 

// dono case mai main thread mai hi hogha kaam 

























// ES6 vs common js have syntax diffefence



// common js[node js default value system]
// strict mode not enabled
// synchronous
// file loading synchronous
// file extension optional
// if we give full file path then we can load any file using cjs
// IT IS CONVENTION TO ADD CJS IN THE FILE EXTENSION
//IT IS OPTIONAL to set type module in common js because common js have by default value module
//the value of this keyword is points to module.exports
// require function is not hoisted  or cjs are not hoisted in hoisted means they have memory ,excecution phase so create seperated mempry for var let const and import so jaate hi import dikha toh phele chalega
// top level await is allowed
// only one value can be exported









// es6 modules
//asynchronous
//strict mode  enabled
// file loading asynchronous
// file extension optional.
// file extension mandator
// we can not load any file only only js and mjs files are allowed 
// IT IS CONVENTION to add mjs in the file extension
//we have to set type=module in package .json
// in this mjs this keyword is undefined
// mjs imports are hoisted 
// top level await is not  allowed
// multiple values exported or objects// require ek function hai










