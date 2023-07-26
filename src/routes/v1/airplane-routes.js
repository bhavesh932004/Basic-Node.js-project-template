const router = require("express").Router();

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares/index");

console.log("inside airplane routes");
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.create_airplane
);
router.get("/", AirplaneController.get_airplanes);

module.exports = router;
