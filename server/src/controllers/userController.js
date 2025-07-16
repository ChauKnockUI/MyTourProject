const asyncHandle = require("express-async-handler");
const UserModel = require("../models/userModel");

const getAllUsers = asyncHandle(async (req, res) => {
  const users = await UserModel.find({});
  const data = [];
  users.forEach((item) => {
    data.push({
      email: item.email ?? "",
      fullname: item.fullname ?? "",
      id: item.id,
    });
  });
  res.status(200).json({
    message: "Get users successfully!",
    data,
  });
});
const getProfile = asyncHandle(async (req, res) => {
  const { uid } = req.query;

  if (uid) {
    const profile = await UserModel.findOne({ _id: uid });

    res.status(200).json({
      message: "fafa",
      data: {
        uid: profile._id,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
        fullname: profile.fullname ?? "",
        givenName: profile.givenName ?? "",
        familyName: profile.familyName ?? "",
        email: profile.email ?? "",
        photoUrl: profile.photoUrl ?? "",
        bio: profile.bio ?? "",
        following: profile.following ?? [],
        interests: profile.interests ?? [],
      },
    });
  } else {
    res.sendStatus(401);
    throw new Error("Missing uid");
  }
});
module.exports = { getAllUsers, getProfile };
