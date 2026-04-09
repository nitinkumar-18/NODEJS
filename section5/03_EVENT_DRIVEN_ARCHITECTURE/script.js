const h1 = document.querySelector("h1");

h1.addEventListener("click", (e) => {
  console.log("h1 clicked");
});




// h1 event emitter
// h1.addEventListener("click" event listener
//()=>{
  // console.log("h1 clicked");}. //event handler





 // examples of EDA PATTERN
// 1. DOM events (click, mouseover, etc.)
// 2. Custom events (using EventTarget or libraries like EventEmitter)
// 3. Server-sent events (SSE) for real-time updates
// 4. WebSocket events for bidirectional communication
// 5. User input events (form submission, keypress, etc.)
// 6. Timer events (setTimeout, setInterval)
// 7. API response events (fetch, XMLHttpRequest)   



// OS HANDLING USER INPUTS THIS HANDLES OUR CPU

// PAYMENT GATEWAY HANDLING PAYMENT REQUESTS THIS HANDLES OUR BANKS

// SOCIAL MEDIA PLATFORMS HANDLING USER INTERACTIONS THIS HANDLES OUR SOCIAL MEDIA

// YOUTUBE NOTIFICATIONS HANDLING VIDEO UPLOADS THIS HANDLES OUR VIDEO CONTENT


// NOT MORE SCALABLE
// ALL CLIENTS CONNECTING TO SAME SERVER
// SERVER BECOMES A BOTTLENECK

// EDA SOLUTION
// CLIENTS EMIT EVENTS TO SERVER
// SERVER PROCESSES EVENTS ASYNCHRONOUSLY
// SERVER CAN SCALE HORIZONTALLY TO HANDLE MORE EVENTS




//ZAPIER 


// BIG BIG APPLICATIONS LIKE FACEBOOK, TWITTER, YOUTUBE, ETC. USE EDA TO HANDLE BILLIONS OF EVENTS PER DAY. THEY USE MESSAGE QUEUES, EVENT BUSES, AND OTHER TOOLS TO MANAGE THE FLOW OF EVENTS AND ENSURE SCALABILITY AND RELIABILITY.





