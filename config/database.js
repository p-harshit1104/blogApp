const mongoose = require("mongoose");
require("dotenv").config();
const dbConeect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection succesfull");
    })
    .catch((error) => {
      console.log("error caught");
      console.log(error.message);
      process.exit(1);
    });
};
module.exports = dbConeect;
