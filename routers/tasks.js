const express = require("express");

const Tasks = require("../models/task");

const router = express.Router();

//GET ALL TASKS
router.get("/tasks", async (req, res, next) => {
  try {
    const allTasks = await Tasks.find();
    res.json(allTasks);
  } catch (err) {
    res.status(500).json({ message: "Unable to get list of all tasks" });
    next(err);
  }
});

//GET TASKS BY PROJECT ID
router.get("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;

  Tasks.findTasks(id)
    .then((task) => {
      if (task.length) {
        res.json(task);
      } else {
        res.status(404).json({
          message:
            "Sorry, I'm unable to get the list of tasks for that project",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failure to communicate with endpoint" });
    });
});

//ADD TASK
router.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
  const newTask = {
    project_id: id,
    ...req.body,
  };

  Tasks.findById(id)
    .then((project) => {
      if (project) {
        Tasks.addTask(newTask, id).then((task) => {
          res.status(201).json(task);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create a new task" });
    });
});

module.exports = router;
