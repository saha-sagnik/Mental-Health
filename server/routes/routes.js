const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
const cors = require("cors");

router.get('/',cors(),mainController.home);

router.get("/checkUser",cors(),mainController.checkUser); // Present in Navbar checks at each route 
router.post("/login",cors(),mainController.login); // Normal Login
router.post("/post-login",cors(),mainController.postLogin); // Login with Firebase
router.post("/signup",cors(),mainController.signup);
router.get("/logout",cors(),mainController.logout);
router.post('/info',cors(),mainController.questionnaireInfo);


module.exports = router;