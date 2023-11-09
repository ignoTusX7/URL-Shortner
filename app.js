const express = require("express");
require("dotenv").config();
const { connectMongo } = require("./_dbconn");
const app = express();
const urlRoutes = require("./routes/url");
app.use(express.json());
connectMongo(process.env.MONGODB_URL).then(() => console.log("Connected"));
const { getUrl } = require("./controller/urls");
app.use("/url", urlRoutes);

app.use("/:shortId", getUrl);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
