const router = require("express").Router();

router.use(function timelog(req, res, next) {
  console.log("Time : ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("home page");
});

module.exports = router;
