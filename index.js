const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

const routes = require("./routes/routes");

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`server connect on port ${PORT}`);
});
