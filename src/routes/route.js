const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const UserController= require("../controllers/userController")

router.post('/insertBook', UserController.storeData); 

router.get('/fetchData', UserController.fetchData); 


module.exports = router;