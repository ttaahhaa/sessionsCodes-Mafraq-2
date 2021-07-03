const homeModel = require("../Model/home_model")

exports.getHome = (req, res, next)=>{
    homeModel.getCovidInfo().then(([rows, meta])=>{
        console.log(rows[0]["id"])
    }).catch(err=>{
        console.log(err)
    });
}

exports.getStatus = (req, res, next)=>{
    homeModel.isVaccinated("yes").then(([rows, meta])=>{
        console.log(rows)
    })
    .catch(err=>{console.log(err)})
}