const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
const blogRoute = require("../blogApp/routes/blogs");

app.use("/api/v1", blogRoute);


const dbconnect = require("../blogApp/config/database");
dbconnect();
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>welcome to the blog page server. </h1>`);
});
