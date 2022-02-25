const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post('/insertBook', UserController.storeData); 


module.exports = router;