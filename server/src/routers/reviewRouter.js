const Router = require("express");
const { getReview, getMyReview } = require("../controllers/reviewController");

const reviewRouter = Router();

reviewRouter.get("/get-review-place", getReview);
reviewRouter.get("/get-my-review", getMyReview);
module.exports = reviewRouter;
