const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const bodyParserMW = bodyParser.urlencoded({
    extended: true
})
app.get("/", (req, res, next)=>{
    res.write ("<html>")
    res.write ("<head><title>This is an example of post</title>")
    res.write ("</head>")
    res.write ('<body><form action="/message" method="POST"><input type="text" name="username" id=""><button type="submit">Click me</button></form></body>')
    res.write ("</html>")
    res.end()
})
const posting = 
app.post("/message", bodyParserMW, (req, res, next)=>{
    console.log(req.body)
})
app.listen(3000, ()=>{
    console.log("listening on 3000...")
})