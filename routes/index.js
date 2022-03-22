const router = require("express").Router();
const tweets = require("./tweets");

router.use("/tweets", tweets);
router.get("/", function (req, res) {
  res.redirect("/tweets");
});

module.exports = router;
