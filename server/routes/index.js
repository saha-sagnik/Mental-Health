const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main");
const cors = require("cors");

router.get('/',cors(),mainController.home);

router.get("/checkUser/:email",mainController.checkLogin);
router.post("/signup",cors(),mainController.signup);
// router.post('/post-login',cors(),mainController.postLogin);
router.post('/info',mainController.questionnaireInfo);


module.exports = router;