const db  = require("./database")
const bcrypt = require("bcrypt")
exports.isEmailExist = (email) =>{
    return new Promise ((resolve, reject)=>{
        resolve(db.execute(`SELECT email FROM users WHERE email='${email}'`))
        reject (Error("Something went wrong..."))
    })
}
// [[{email: m@m}],[meta d;fmjsd;fjs]]
exports.addUser = (name, username, email, password) =>{
    return new Promise ((resolve, reject)=>{
        // sql injection => way of hacking 
       db.execute(`insert into users (name, username, email, password) values (?, ?, ?, ?)`,
       [name, username, email, password])
       resolve("the account is registered")
       reject ("the account does not added")
    })
}

exports.addBook = (name, discription, category) =>{
    return new Promise ((resolve, reject)=>{
        // sql injection => way of hacking 
       db.execute(`insert into books (name, discription, category) values (?, ?, ?)`,
       [name, discription, category])
       resolve("the book is added")
       reject ("the book does not added")
    })
}

// rows[0]=email2
// password => 12345 from user
exports.login = (email, password)=>{
    /* 
        1. check email existance
        2. get the password
        3. compare the entered password with the encrypted password
        4. if email and password exists => authintice
            else the user not allowd to enter
    */
    return new Promise((resolve, reject)=>{
        // return the result from database
        this.isEmailExist(email).then(([rows, meta])=>{
            return rows[0]
        }).then(email2=>{
            // id the email is not in the db
            //email2 =  {email: "m@m"}
            if(!email2){
                reject ("the email is not exist")
            }
            // if the email in the database (exist)
            else{
                // if the password exist, but i don't checked the correctness of it
                this.isPasswordExistance(email2["email"]).then((rows, meta)=>{
                    return rows[0][0]["password"]

                }).then(encryptedPassword=>{ // dyfjgaifbgaksdbaksdbuaks from DB
                    // comapre returns boolean if it the passwords are same then it will return true 
                    // otherwise it will return false
                    return bcrypt.compare(password, encryptedPassword)
                }).then(same=>{
                    if(!same){
                        reject("the password is not correct")
                    }else{
                        resolve("You are welcome")
                    }
                })
            }
        })
    })
}

exports.isPasswordExistance = (email)=>{
    return new Promise((resolve, reject)=>{
        resolve(db.execute(`select password from users where email='${email}'`))
        reject (Error("Password is not matched"))
    })
}