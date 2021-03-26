require("dotenv").config();

const express = require("express");
const app = express();

// const pool = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const productRoutes = require("./routes/product");

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the world of NodeJs with Postgres!");
});

app.use("/api", productRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
