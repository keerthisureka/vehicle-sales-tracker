const routes = require('express').Router();
const controller = require("../controller/controller");

routes.route('/api/cars')
    .post(controller.addCars)
    .get(controller.getCars);

module.exports = routes;