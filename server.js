const express = require("express");
const mongoose = require("mongoose");

// for using .env
require("dotenv");

//gloabl variables
const APP = express();
const PORT = process.env.PORT || 3000;

//middleware's

//routes

// server started
APP.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started on port ${PORT}`);
  }
});
