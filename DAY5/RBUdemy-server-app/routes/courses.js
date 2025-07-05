var express = require("express");
const coursesModel = require("../models/courses.model");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // to get data from mongoDB(using mongoose) and return back to the client
  let courses = await coursesModel.find({}); // select * from courses
  res.json(courses);
});

module.exports = router;
