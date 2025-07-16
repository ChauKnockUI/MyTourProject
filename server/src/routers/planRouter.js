/** @format */

const Router = require("express");
const {
  addNewPlan,
  getPlans,
  updatePlaceToPlans,
  getAllPlaceToPlans,
  deletePlan,
  updatePlan,
} = require("../controllers/planController");

const planRouter = Router();

planRouter.post("/add-new-plan", addNewPlan);
planRouter.get("/get-plans", getPlans);
planRouter.put("/update-place-to-plan", updatePlaceToPlans);
planRouter.delete("/delete-plan", deletePlan);
planRouter.put("/update-plan", updatePlan);
// planRouter.get("/get-all-place-of-plans", getAllPlaceToPlans);
module.exports = planRouter;
