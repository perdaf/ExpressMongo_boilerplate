const router = require("express").Router();

router.use(function timelog(req, res, next) {
  console.log("req => ", req.body);
  // console.log(`${req.method} => ${req.url}`);
  next();
});

router.get("/user", (req, res) => {
  res.render("homePage", {
    result: req.body,
    title: "home page"
  });
});

module.exports = router;
