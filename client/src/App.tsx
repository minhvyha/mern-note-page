import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import INote from "./interfaces/note.interface";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState<Array<INote>>([]);
  const [isOpenForm, setIsOpenFrom] = useState<Boolean>(false);
  const [text, setText] = useState<String>("");
  const [link, setLink] = useState<String>("");

  useEffect(() => {
    getNotes();
  }, []);

  const handleClose = () => {
    setIsOpenFrom(false);
  };

  const handleOpen = () => {
    setIsOpenFrom(true);
  };

  const updateText = () => {
    const text = document.querySelectorAll("input")[0].value;
    if (text) {
      setText(text);
    }
  };

  const updateLink = () => {
    const link = document.querySelectorAll("input")[1].value;
    if (link) {
      setLink(link);
    }
  };

  const onNoteUpdated = (note: INote) => {
    setNotes((notes) =>
      notes.map((oldNote: INote) => {
        return note._id === oldNote._id ? note : oldNote;
      })
    );
    axios.post("http://localhost:3001/modifyNote", note);
  };

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getNote");
      setNotes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (note: INote) => {
    await axios.post("http://localhost:3001/deleteNote", note);
    getNotes();
  };

  const onCreate = async () => {
    console.log(text);
    console.log(link);
    await axios.post("http://localhost:3001/createNote", { text, link });
    getNotes();
  };

  let notesElement = notes.map((note) => {
    return (
      <Note
        key={note._id}
        onNoteUpdated={onNoteUpdated}
        note={note}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="App">
      <div>
        <div className="notes-list">{notesElement}</div>
        <span className="material-symbols-outlined circle" onClick={handleOpen}>
          add_circle
        </span>
        <Form
          onCreate={onCreate}
          isOpen={isOpenForm}
          handleClose={handleClose}
          updateLink={updateLink}
          updateText={updateText}
        />
      </div>
    </div>
  );
}

export default App;
