const authnticationModel = require("../Model/authntication_model");
const bcrypt = require("bcrypt")
// name
// username
// email
// password
// repassword

/* 
    if user is not exist in the database
        Then add the user
        Else the user is already exist
*/
exports.postsignup = (req, res, next)=>{
 let name = req.body.name,
     username = req.body.username,
     email = req.body.email,
     password = req.body.password,
     rePassword = req.body.rePassword;
     
init()
async function init(){
    let encryptedPassword = await bcrypt.hash(password, 10) // 12345678 => akisubdgakisudbhkaiudsgaiudgi
    let [rows, meta] = await authnticationModel.isEmailExist(email);
    // user does not exist, so, you can register with this email
    if (!rows[0]){
        console.log("trying to register a user in the database");

        let userInfo = await authnticationModel.addUser(name, username, email, encryptedPassword)

        res.render("login", {
            result: userInfo
        })
    }
    // there is a user exist in the database, so you can't register with this email 
    else{
        console.log("The user is already exist");
        res.render("signup",{
            result: "You can't register with the same email twice..."
        })
    }
}


exports.addBook = (req, res, next)=>{
    let name = req.body.name,
    discription = req.body.discription,
    category = req.body.category;

    authnticationModel.addBook(name, discription, category).then(info=>{
        res.render("addBook",{
            info: info
        })
    }).catch(err=>{
        res.render("addBook", {
            info:err
        })
    })

}



}

exports.getLogin = (req, res, next)=>{
    res.render("login")
}

exports.postLogin = (req, res, next)=>{
    let email = req.body.email,
        password = req.body.password;
        // console.log(`email: ${email} \n password: ${password}`)
    authnticationModel.login(email, password).then(()=>{
        res.render("profile")
    }).catch((err)=>{
        // the password is not correct
        // the email is not exist
        res.render("login", {
            info: err
        })
    })
}