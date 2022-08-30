const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

const port = 5001;
const app = express();
mongoose.connect("mongodb+srv://minhvy:<password>@cluster0.lo27vwn.mongodb.net/?retryWrites=true&w=majority")

app.use(express.json());
app.use(cors());




app.listen(port, () => {
  console.log("hello, world");
});
