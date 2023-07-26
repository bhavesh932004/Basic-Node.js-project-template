const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function create_airplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modalNumber: req.body.modalNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.message = "Successfully created an airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    throw error;
  }
}

async function get_airplanes(req, res) {
  console.log("inside controller");
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.message = "Successfully retrieved all airplanes";
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  create_airplane,
  get_airplanes,
};
