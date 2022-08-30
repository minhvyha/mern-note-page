const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const NoteModel = require('./models/Note')



const port = 3001;
const app = express();
mongoose.connect(`mongodb+srv://minhvy:SH8Z5aEju51aQUPT@cluster0.lo27vwn.mongodb.net/notedatabse?retryWrites=true&w=majority`)

app.use(express.json());
app.use(cors());


app.use('/getNote', (req, res) =>{
  NoteModel.find({}, (err, result) =>{
    if (err) {
      res.json(err)
    }
    else{
      res.json(result) 
    }

  })
})

app.get('/', (req, res) =>{
  res.send('hello world')
})

app.listen(port, () => {
  console.log("hello, world");
});
