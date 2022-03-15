const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes");
require("./database/index");

const app = express();
const port = process.env.PORT || 4000;
// const dotenv = require("dotenv");
// dotenv.config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(port);
console.log("Server listening on port " + port);