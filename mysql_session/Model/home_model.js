const db = require("./database")

exports.getCovidInfo = ()=>{
    return new Promise((resolve, reject)=>{
        resolve(db.execute("SELECT * FROM patient"))
        reject (Error("Can't connect to mysql DB !!!"))
    })
}

exports.isVaccinated  = (status)=>{
    return new Promise((resolve, reject)=>{
        console.log(`SELECT * FROM patient WHERE vacenated=${status}`)
        resolve(db.execute(`SELECT * FROM patient WHERE vacenated='${status}'`))
        reject (Error("Can't connect to mysql DB !!!"))
    })
}

