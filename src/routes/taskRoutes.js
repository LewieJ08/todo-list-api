const express = require("express");
const taskController = require("../controllers/taskController");
const mwAuth = require("../middleware/auth");

const router = express.Router;
router.use(mwAuth);

router.route("/")
    .get(taskController.getAllTasks)
    .post(taskController.createTask);

router.route("/:id")
    .get(taskController.getTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);

module.exports = router