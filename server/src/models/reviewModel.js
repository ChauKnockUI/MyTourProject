/** @format */

const { default: mongoose } = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },

  photoUrl: {
    type: [String],
  },
  star: {
    type: Number,
  },
  idUser: {
    type: String,
    required: true,
  },

  idPlace: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  //   followers: {
  //     type: [String],
  //   },
});

const ReviewModel = mongoose.model("reviews", ReviewSchema);
module.exports = ReviewModel;
