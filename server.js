require('dotenv').config()
const cors = require("cors");
const path = require("path");
var morgan = require('morgan')

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");
const propertyRoute = require("./routes/properties")

const app = express();

//To prevent CORS errors
app.use(cors());
app.use(morgan('combined'))
//Connecting mongoDB
// const databaseConfig = require("./config/keys");
// console.log(databaseConfig);
mongoose.connect('mongodb://localhost/airbnb-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Checking the connection to db
var db = mongoose.connection;
db.once("open", () => console.log("Mongo Database is connected now!"));
db.on("error", console.error.bind(console, "connection error:"));

app.use(express.static("./uploads"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/users", userRoute);
app.use("/api/properties", propertyRoute);

//Serve our static asset
app.use(express.static("frontend/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;
