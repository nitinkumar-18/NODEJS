import EventEmitter from 'events';


// console.log(EventEmitter);
//constructor emitter function ek tarah sai class hota hai jisme hum apni custom events create kar sakte hain aur unhe emit kar sakte hain. Iska use hum asynchronous programming mein karte hain, jahan hum events ke through communication karte hain.




const emitter=new EventEmitter();//emitter object return karta hai jo humare custom events ko handle karega. Is object ke through hum apne events ko emit kar sakte hain aur unhe listen kar sakte hain.


// yeh max listeners ki limit set karta hai, jiska matlab hai ki agar hum ek event ke liye zyada listeners add karte hain to warning generate hogi. By default, Node.js mein max listeners ki limit 10 hoti hai. Agar aapko zyada listeners add karne ki zarurat hai, to aap is method ka use karke limit badha sakte hain. Yahan par humne limit ko 2 set kiya hai, iska matlab hai ki agar hum ek event ke liye 2 se zyada listeners add karte hain to warning generate hogi.

emitter.setMaxListeners(2);

//abc event ka name uske andar do event handlers hai
//abc is a event name 
// emitter is event emitter 
emitter.on('abc',()=>{
    console.log('abc event emitted1');
});
emitter.on("y",()=>{
    console.log('first y abc event emitted');
});

emitter.on("x",()=>{
    console.log('abc event emitted');
});


emitter.on("y",()=>{
    console.log(' second abc event emitted');
});


// kUDH KAA BHI USE KAR SKTE HAI EVENT EMITTER AUR CUSTOM EMITTER
// EK EVENT LISTENER KE LIYE MULTIPLE EVENT HANDLERS HO SAKTE HAI
// emitter.on("y",()=>{
//     console.log(' second abc event emitted');
// });

emitter.once("abc",()=>{
    console.log('once abc event emitted');

});

emitter.once("abc",()=>{
    console.log("TANISH");
})



emitter.once("abc",()=>{
    console.log('once abc event emitted');

});



// emitter.on("y",()=>{
//     console.log('abc event emitted');
// });


//event fire horha hai emitter.emit sai
// emitter.emit("abc");

emitter.emit("y");


emitter.emit("abc");
emitter.emit("abc");


// emitter object bana banaya milega  kudh sai nhi abnate hai uss par on  method vagera lagate hai and all method use karte hai to listen to the events and emit method use karte hai to fire the events.


//multiple handlers for same event




console.log(emitter._events);