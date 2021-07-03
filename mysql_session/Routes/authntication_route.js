const router = require("express").Router()
const authnticationController = require("../Controller/authntication_controller")
// when the user need to enter the login page
router.get("/login", authnticationController.getLogin)
// when the user needs to login
router.post("/login", authnticationController.postLogin)

// when the user tried to enter the signup page
router.get("/signup", authnticationController.getsignup)
// when the user needs to signup to the website
router.post("/signup", authnticationController.postsignup)

router.post("/addBook", authnticationController.addBook)
module.exports = router;