const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if (url === "/" && method ==="GET"){
        res.write ("<html>")
        res.write ("<head><title>This is an example of post</title>")
        res.write ("</head>")
        res.write ('<body><form action="/message" method="POST"><input type="text" name="username" id=""><button type="submit">Click me</button></form></body>')
        res.write ("</html>")
        res.end()
    }
     if(url === "/message" && method ==="POST"){
         const body = [];
         req.on("data", (chunck)=>{
             body.push(chunck)
         })
         req.on ("end", ()=>{
             const parsedBody = Buffer.concat(body).toString();
             const message = parsedBody.split("=")[1]
             console.log(message);
             fs.writeFileSync("message.txt", message)
             res.end();
         })
     }
})
server.listen(3000, ()=>{
    console.log("listening on 3000...")
})