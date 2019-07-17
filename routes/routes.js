const router = require("express").Router();

router.use(function timelog(req, res, next) {
  console.log(req.body);
  console.log(`${req.method} => ${req.url}`);
  next();
});

router.get("/", (req, res) => {
  res.send("home page");
});

module.exports = router;
