/** @format */

const { default: mongoose } = require("mongoose");

const PlanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  authorId: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
  },
  places: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  date: {
    type: String,
    required: true,
  },
  //   followers: {
  //     type: [String],
  //   },
});

const PlanModel = mongoose.model("plans", PlanSchema);
module.exports = PlanModel;
