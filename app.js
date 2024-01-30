require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

require("./routes")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

require("./error-handling")(app);

module.exports = app;
