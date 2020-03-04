const express = require('express');
const routes = express.Router();

const ProjectController = require("./Controllers/ProjectController");


//This is all routes of the method Project
routes.get("/project", ProjectController.index);
routes.get('/project/:id', ProjectController.show);
routes.post("/project", ProjectController.create);
routes.put('/project/:id', ProjectController.update);
routes.put('/project/:id', ProjectController.createTarefa);
routes.delete('/project/:id', ProjectController.delete);

//export module
module.exports = routes;
