const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get("/test", (req, res) => {
  res.status(200).send("Hello welcome to brokang market");
});

app.use("/api/v1/user", userRouter);

module.exports = app;
