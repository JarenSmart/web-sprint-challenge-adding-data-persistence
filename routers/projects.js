const express = require("express");

const Projects = require("../models/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const allProjects = await Projects.find();
    res.json(allProjects);
  } catch (err) {
    res.status(500).json({ message: "Unable to get list of projects" });
    next(err);
  }
});

router.post("/projects", (req, res, next) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

module.exports = router;
