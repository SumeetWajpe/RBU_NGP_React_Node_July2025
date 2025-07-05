var express = require("express");
const coursesModel = require("../models/courses.model");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // to get data from mongoDB(using mongoose) and return back to the client
  let courses = await coursesModel.find({}); // select * from courses
  res.json(courses);
});
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  // biz logic for delete
  const delid = await coursesModel.deleteOne({ id });
  console.log(delid);
  res.json({ msg: "Deleted successfully !", status: true });
});

module.exports = router;
