const express = require("express");
//database
const database=require("./database");
//initilisation
const booky = express();


booky.get("/", (request,response) => {
 
return response.json({boks:database.books});
});

booky.get("/:isbn ")

booky.listen(3000,() => console.log("hey frnds the server is running"));
