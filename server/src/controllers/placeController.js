const asyncHandle = require("express-async-handler");
const PlaceModel = require("../models/placeModel");

const calcDistanceLocation = ({
  currentLat,
  curentLong,
  addressLat,
  addressLong,
}) => {
  const r = 6371;
  const dLat = toRoad(addressLat - currentLat);
  const dLon = toRoad(addressLong - curentLong);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(toRoad(currentLat)) *
      Math.cos(toRoad(addressLat));
  return r * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const toRoad = (val) => (val * Math.PI) / 180;
const addNewPlace = asyncHandle(async (req, res) => {
  const body = req.body;

  if (body) {
    const newPlace = new PlaceModel(body);

    await newPlace.save();
    console.log(newPlace);
    res.status(200).json({
      message: "Add new Place successfully!!!",
      data: newPlace,
    });
  } else {
    res.status(401);
    throw new Error("Place data not found!!!");
  }
});
const getPlaces = asyncHandle(async (req, res) => {
  const { lat, long, distance, limit, id } = req.query;
  if (id) {
    const places = await PlaceModel.findById(id);
    console.log(places);
    res.status(200).json({
      message: "get places of plan ok",
      data: places,
    });
  } else {
    const places = await PlaceModel.find({})
      .sort({ star: -1 })
      .limit(limit ?? 0);

    if (lat && long && distance) {
      const items = [];
      if (places.length > 0) {
        places.forEach((event) => {
          const placeDistance = calcDistanceLocation({
            curentLong: long,
            currentLat: lat,
            addressLat: event.position.lat,
            addressLong: event.position.long,
          });

          if (placeDistance < distance) {
            items.push(event);
          }
        });
      }

      res.status(200).json({
        message: "get places ok",
        data: items,
      });
    } else {
      res.status(200).json({
        message: "get places ok",
        data: places,
      });
    }
  }
});
const getAllPlaceOfPlans = asyncHandle(async (req, res) => {
  const body = req.body;
  const { data } = body;

  const place = await PlaceModel.find({
    _id: {
      $in: data,
    },
  });

  console.log(`place: ${place}`);
  res.status(200).json({
    message: "add place to plan ok",
    data: place,
  });
});
const searchPlaces = asyncHandle(async (req, res) => {
  const { title } = req.query;
  const places = await PlaceModel.find({});

  const items = places.filter((element) =>
    element.title.toLowerCase().includes(title.toLocaleLowerCase())
  );

  res.status(200).json({
    message: "get places ok",
    data: items,
  });
});
module.exports = {
  addNewPlace,
  getPlaces,
  getAllPlaceOfPlans,
  searchPlaces,
};
