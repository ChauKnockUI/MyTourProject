const asyncHandle = require("express-async-handler");
const PlanModel = require("../models/planModel");

const addNewPlan = asyncHandle(async (req, res) => {
  const body = req.body;

  if (body) {
    const newPlan = new PlanModel(body);

    await newPlan.save();
    console.log(newPlan);
    res.status(200).json({
      message: "Add new Plan successfully!!!",
      data: newPlan,
    });
  } else {
    res.status(401);
    throw new Error("Plan data not found!!!");
  }
});
const getPlans = asyncHandle(async (req, res) => {
  const plans = await PlanModel.find({});

  const items = [];
  if (plans.length > 0) {
    plans.forEach((plan) => {
      items.push(plan);
    });
  }
  res.status(200).json({
    message: "get plan ok",
    data: items,
  });
});
const updatePlaceToPlans = asyncHandle(async (req, res) => {
  const body = req.body;
  const { id, data } = body;

  await PlanModel.findByIdAndUpdate(
    id,

    { $set: { places: data } }
  );
  console.log(`id: ${id}`);
  console.log(`place: ${data}`);
  res.status(200).json({
    message: "add place to plan ok",
    data: [],
  });
});
const getAllPlaceToPlans = asyncHandle(async (req, res) => {
  const body = req.body;
  const { data } = body;

  // await PlanModel.findByIdAndUpdate(
  //   id,

  //   { $set: { places: data } }
  // );
  // console.log(`id: ${id}`);
  console.log(`place: ${data}`);
  res.status(200).json({
    message: "add place to plan ok",
    data: [],
  });
});
const deletePlan = asyncHandle(async (req, res) => {
  const body = req.body;
  const { id } = body;

  console.log(`Da goi toi API Delete Plan id: ${id}`);
  await PlanModel.deleteOne({ _id: id });
  res.status(200).json({
    message: "delete plan successfully",
    data: id,
  });
});
const updatePlan = asyncHandle(async (req, res) => {
  const body = req.body;
  const { plan } = body;
  try {
    const id = plan;
    // console.log(id);
    console.log(`Da goi toi API Update Plan plan: ${JSON.stringify(plan)}`);
    await PlanModel.updateOne(
      { _id: plan._id },
      {
        $set: {
          title: plan.title,
          photoUrl: plan.photoUrl,
          description: plan.description,
          date: plan.data,
          users: plan.users,
        },
      }
    );
    res.status(200).json({
      message: "update plan successfully",
      data: "update success",
    });
  } catch (error) {}
});
module.exports = {
  addNewPlan,
  getPlans,
  updatePlaceToPlans,
  getAllPlaceToPlans,
  deletePlan,
  updatePlan,
};
