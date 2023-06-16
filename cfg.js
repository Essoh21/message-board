const path = require("path");
const sep = path.sep;
const cfg = {
  dir: {
    root: __dirname,
    public: __dirname + sep + "public" + sep,
    views: __dirname + sep + "views" + sep,
  },
  port: process.env.PORT || 5000,
};

module.exports = cfg;
