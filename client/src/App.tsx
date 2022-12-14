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
  const [error, setError] = useState<String>("");

  useEffect(() => {
    getNotes();
  }, []);

  const hanldeError = () => {
    if (!text) {
      setError("Text is required.");
      return true;
    }
    if (!link) {
      setError("Link is required.");
      return true;
    }
    let expression =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
    if (!link.match(expression)) {
      setError("Invalid link.");
      return true;
    }
  };

  const handleClose = () => {
    setIsOpenFrom(false);
  };

  const handleOpen = () => {
    setIsOpenFrom(true);
  };

  const updateText = () => {
    const text = document.querySelectorAll("input")[0].value;
    setText(text);
  };

  const updateLink = () => {
    const link = document.querySelectorAll("input")[1].value;
    setLink(link);
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

  const resetForm = () => {
    setText("");
    setLink("");
  };

  const onCreate = async () => {
    let error = document.getElementById("error-holder");
    if (hanldeError()) {
      if (error != null) {
        error.style.display = "block";
      }
      return;
    }
    if (error != null) {
      error.style.display = "none";
    }
    setIsOpenFrom(false);
    await axios.post("http://localhost:3001/createNote", { text, link });
    resetForm();
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
          error={error}
          handleClose={handleClose}
          updateLink={updateLink}
          updateText={updateText}
        />
      </div>
    </div>
  );
}

export default App;
