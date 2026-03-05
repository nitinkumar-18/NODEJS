import express from "express";

const app = express();
const port = 2700;

app.get("/", (req, res) => {
  // res.end("HELLO WORLD");

  

  // res.setHeader("Content-Type","application/json");
  // res.end(JSON.stringify({message:"TANISH TANDON"}));

  // USE ABOVE TWO LINES USSAI ACHA HAI USE res.json best hai bro  

  // yeh jo res.json hai yeh usko stringify karta hai aur content type application.json karta hai

  // res.json({message:"THE TANISH TANDON"});





// abh status code ke liye aur json ke liye yeh use karo res.status

//res.status(301).json({message:"THE TANISH TANDON"});  iska  return value res.json hojata hai jabh run karte hai toh res ko hi return karta hai


res.status(301).json({message:"THE TANISH TANDON"}); 











});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// response ke two methods via which we send json data and status code