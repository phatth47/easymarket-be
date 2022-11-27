const mongoose = require("mongoose");
mongoose.connect(
  process.env.DATABASE,
  function (err) {
    if (err) {
      console.log("Mongo connected error!" + err);
    } else {
      console.log("Mongo connect successfully!");
    }
  }
);
