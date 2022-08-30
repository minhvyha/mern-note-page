const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

app.use(express.json());
app.use(cors());




app.listen(port, () => {
  console.log("hello, world");
});
