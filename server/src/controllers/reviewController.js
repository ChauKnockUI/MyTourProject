const asyncHandle = require("express-async-handler");
const ReviewModel = require("../models/reviewModel");

const getReview = asyncHandle(async (req, res) => {
  console.log("Query:", req.query);
  const { id } = req.query;

  console.log(`Da goi toi get review place id: ${id}`);
  const review = await ReviewModel.find({
    idPlace: id,
  });
  console.log(JSON.stringify(id));
  const items = [];
  if (review.length > 0) {
    console.log("da co kq");
    review.forEach((rev) => {
      items.push(rev);
    });
  } else {
    console.log("error 1");
  }
  console.log(items);
  res.status(200).json({
    message: "get review successfully",
    data: items,
  });
});
const getMyReview = asyncHandle(async (req, res) => {
  console.log("Query:", req.query);
  const { id } = req.query;

  console.log(`Da goi toi get my review id: ${id}`);
  const review = await ReviewModel.find({
    idUser: id,
  });
  console.log(JSON.stringify(id));
  const items = [];
  if (review.length > 0) {
    console.log("da co kq");
    review.forEach((rev) => {
      items.push(rev);
    });
  } else {
    console.log("error 1");
  }
  console.log(items);
  res.status(200).json({
    message: "get review successfully",
    data: items,
  });
});
module.exports = {
  getReview,
  getMyReview,
};
