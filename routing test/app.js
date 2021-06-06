const express = require("express")
const app = express()
const path = require("path")



app.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.post("/message", express.urlencoded({extended: true}), (req, res, next)=>{
    console.log(req.body.gender)
    res.sendFile(path.join(__dirname, "views", "ok.html"))
})
app.listen(5000, ()=>{
    console.log("listening on 5000...")
})