const express = require("express");
const userController = require("../controllers/userController");
const mwAuth = require("../middleware/auth");

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", mwAuth, userController.logoutUser);

module.exports = router;