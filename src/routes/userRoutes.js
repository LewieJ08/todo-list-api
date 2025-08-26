const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser)

module.exports = router;