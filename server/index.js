const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const port = 5001;
const app = express();

app.use(express.json());
app.use(cors());




app.listen(port, () => {
  console.log("hello, world");
});
