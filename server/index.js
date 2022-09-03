const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const NoteModel = require("./models/Note");

const port = 3001;
const app = express();
mongoose.connect(
  `mongodb+srv://minhvy:SH8Z5aEju51aQUPT@cluster0.lo27vwn.mongodb.net/notedatabse?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(cors());

app.get("/getNote", (req, res) => {
  NoteModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/modifyNote", async (req, res) => {
  const note = req.body;
  let text = note.text;
  let link = note.link;
  NoteModel.findByIdAndUpdate(note._id, { text, link }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/deleteNote", async (req, res) => {
  const id = req.body._id;
  NoteModel.deleteOne({ _id: id }).then((result) => {
    res.json(result);
  });
});

app.post("/createNote", async (req, res) => {
  const note = req.body;
  const newNote = new NoteModel(note);
  await newNote.save();
  res.json(note);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("hello, world");
});
