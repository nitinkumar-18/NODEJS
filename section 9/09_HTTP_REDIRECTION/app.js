import express from "express";

const app = express();

app.get("/directory", (req, res) => {
  // res.json({
  //   name: "images",
  //   files: ["Node.png", "js.webp"],
  // });


// res.set({
//   'location':'/folder',

// })
//   res.status(301).end()


      //OR
// 302 303 par bhi same kaam hogha jo 301  mai ho rha hai but differemce hai sabh mai

//  res.writeHead(301,{
//   location :"/folder",
//  })    

// res.end();


// res.statusCode=300;
//res.setHeader=("Content-Type",application/json)
//res.end();  // yeh dono line multiplechoices ke liye hoti hai. res.end()  ke andar kuch bhi dedo json,index.html

// OR

// yeh method automatically 302 code set kardeta hai
// yahakuch bhi daal skte hai url mai jiska chaiyeh ho






//best practice hai yeh method
res.redirect("/folder",301);

});



// redirect kia niche dekho


app.get("/folder", (req, res) => {
  res.json({
    name: "images",
    files: ["Node.png", "js.webp"],
  });
});




const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
