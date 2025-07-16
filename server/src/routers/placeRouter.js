/** @format */

const Router = require("express");
const {
  addNewPlace,
  getPlaces,
  getAllPlaceOfPlans,
  searchPlaces,
} = require("../controllers/placeController");

const placeRouter = Router();

placeRouter.post("/add-new", addNewPlace);
placeRouter.get("/get-places", getPlaces);
placeRouter.put("/get-places-of-plan", getAllPlaceOfPlans);
placeRouter.get("/search-places", searchPlaces);
module.exports = placeRouter;
