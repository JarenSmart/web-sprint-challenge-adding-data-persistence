const express = require("express");

const Resources = require("../models/resource");

const router = express.Router();

//GET ALL RESOURCES
router.get("/resources", async (req, res, next) => {
  try {
    const allResources = await Resources.find();
    res.json(allResources);
  } catch (err) {
    res.status(500).json({ message: "Unable to get list of all resources" });
    next(err);
  }
});

//STRETCH (GET RESOURCES BY PROJECT ID)
router.get("/projects/:id/resources", (req, res) => {
  const { id } = req.params;

  Resources.findResources(id)
    .then((resource) => {
      if (resource.length) {
        res.json(resource);
      } else {
        res.status(404).json({
          message:
            "Sorry, I'm unable to get the list of resources for that project",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failure to communicate with endpoint" });
    });
});

//ADD RESOURCE
router.post("/projects/:id/resources", (req, res) => {
  const { id } = req.params;
  const newResource = {
    project_id: id,
    ...req.body,
  };

  Resources.findById(id)
    .then((project) => {
      if (project) {
        Resources.addResource(newResource, id).then((resource) => {
          res.status(201).json(resource);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
