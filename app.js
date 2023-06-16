const express = require("express");
const app = express();
const morgan = require("morgan");
const cfg = require("./cfg");
const indexRoute = require("./routes/index");

// logger middleware function
const morganLogger = morgan("dev");
app.use(morganLogger);

// set view engine
app.set("view engine", "pug");
//set views folder
app.set("views", cfg.dir.views);

//middlewares
//use express.static middleware function to set static folder
app.use(express.static(cfg.dir.public));

//routes
app.get("/", indexRoute);
//seving the app
app.listen(cfg.port, () => {
  console.log("server running on port:" + " " + cfg.port);
});
