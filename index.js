const express = require("express");
const dotenv = require("dotenv").config();
const openaiRouter = require("./routes/openaiRoutes");
var bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(openaiRouter);

app.get("/", (req, res) => {
  res.json({ message: "Testing API" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
