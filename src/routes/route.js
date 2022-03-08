const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController"); 

const middleware = require('../middleware/auth'); 


router.post("/users", userController.createUser); 

router.post("/login", userController.loginUser); 

router.get("/users/:userId", middleware.auth, userController.getUserData); 

router.put("/users/:userId", middleware.auth, userController.updatedUser); 

router.delete('/users/:userId', middleware.auth, userController.userDelete); 


module.exports = router;