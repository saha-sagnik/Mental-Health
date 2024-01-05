const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware/checkAuth.js');
const dashController = require('../controllers/dashboardController.js');

router.get('/dashboard',isLoggedIn,dashController.dashboard);


module.exports = router;