const express = require("express");
const app = express();
const path = require("path");
const homeRoute = require("./Routes/home_route")
const authnticationRoute = require("./Routes/home_route")
app.use(express.static(path.join(__dirname,"Assets")))
const PORT = 3000;

// app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "Views"))

app.use(express.urlencoded({extended: true}))
app.use(homeRoute)
app.use(authnticationRoute);

app.listen(PORT, (err)=>{
    console.log(err);
    console.log("listining to  port ...")
});