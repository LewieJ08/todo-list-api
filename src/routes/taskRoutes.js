const express = require("express");
const taskController = require("../controllers/taskController");
const mwAuth = require("../middleware/auth");
const mwIdChecker = require("../middleware/idChecker");

const router = express.Router();
router.use(mwAuth);

router.route("/")
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

router.route("/:id")
    .get(mwIdChecker, taskController.getTask)
    .put(mwIdChecker, taskController.updateTask)
    .delete(mwIdChecker, taskController.deleteTask);

module.exports = router;