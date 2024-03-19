const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("1st express server");
});

const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  class: Number,
});

// const Child = mongoose.model("Child", {
//   firstName: String,
//   lastName: String,
//   class: Number,
// });

// get request
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// get with specific id
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.find();
    res.json({
      data: users,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
});

// post request
app.post("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      data: users,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log("1st express server");
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Express server is live"))
    .catch((error) => {
      console.log(error);
    });
});

// REST API:
// GET- /customers (Read)
// POST- /customers (Create)
// DELETE- /customers/:id (delete)
// PATCH- /customers/:id
