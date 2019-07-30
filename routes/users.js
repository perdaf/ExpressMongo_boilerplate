const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("you are in api/users Page");
});

module.exports = router;
