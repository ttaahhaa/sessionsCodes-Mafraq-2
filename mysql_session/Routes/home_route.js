const router = require("express").Router()
const homeController = require("../Controller/home_controller")

router.get("/", homeController.getHome)
router.get("/status", homeController.getStatus)
module.exports = router;