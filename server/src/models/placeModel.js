/** @format */

const { default: mongoose } = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  locationTitle: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  position: {
    type: {
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
    },
    required: true,
  },
  photoUrl: {
    type: String,
  },
  star: {
    type: Number,
  },
  authorId: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
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

const PlaceModel = mongoose.model("places", PlaceSchema);
module.exports = PlaceModel;
