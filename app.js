const express = require("express");
const app = express();
const morgan = require("morgan");
const cfg = require("./cfg");
const indexRoute = require("./routes/index").router;
const newMessageRoute = require("./routes/new");

// logger middleware function
const morganLogger = morgan("dev");
app.use(morganLogger);

// set view engine
app.set("view engine", "pug");
//set views folder
app.set("views", cfg.dir.views);

//middlewares
//express building middlewares
app.use(express.static(cfg.dir.public));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", indexRoute);
app.get("/new", newMessageRoute);
app.post("/new", newMessageRoute);
//seving the app
app.listen(cfg.port, () => {
  console.log("server running on port:" + " " + cfg.port);
});
