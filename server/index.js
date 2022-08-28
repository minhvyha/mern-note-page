const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;
const { router } = require("./api/v1/index");

app.use(express.json());
app.use(cors());
app.use("/notes", router);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("hello, world");
});
