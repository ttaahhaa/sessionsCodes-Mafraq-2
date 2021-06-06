const express = require("express")
const app = express()

app.use("/", (req, res, next)=>{
    console.log("a")
    next(); //if I used next here it will fire any middleware that is fit to the route 
})
app.all("*", (req, res, next)=>{
    console.log("b")
})

app.listen(3000, ()=>{
    console.log("listening on 3000...")
})