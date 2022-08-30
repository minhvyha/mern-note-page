const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const NoteModel = require('./models/Note')

const port = 5001;
const app = express();
mongoose.connect("mongodb+srv://minhvy:<password>@cluster0.lo27vwn.mongodb.net/notedatabse?retryWrites=true&w=majority")

app.use(express.json());
app.use(cors());

app.use('/getNote', (req, res) =>{
  NoteModel.find({}, (err, result) =>{

  })
})


app.listen(port, () => {
  console.log("hello, world");
});
