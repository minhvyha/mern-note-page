import { useState, useEffect } from "react";
import axios from "axios";
import NOTES from "./DUMMYNOTES";
import { nanoid } from "nanoid";
import Note from "./components/Note";
import INote from "./interfaces/note.interface";

function App() {
  const [notes, setNotes] = useState<Array<INote>>([]);

  useEffect(() => {
    const localNotes: string = localStorage.getItem("notes") || "[]";
    if (localNotes !== "[]") {
      let newNote = JSON.parse(localNotes);
      console.log(newNote);
      setNotes(newNote);
    } else {
      setNotes(NOTES);
    }
  }, []);

  useEffect(() => {
    const saveNotes = JSON.stringify(notes);
    localStorage.setItem("notes", saveNotes);
  }, [notes]);

  const onNoteUpdated = (note: INote) => {
    setNotes((notes) =>
      notes.map((oldNote: INote) => {
        return note._id === oldNote._id ? note : oldNote;
      })
    );
  };

  // const getNotes = async () =>{
  //   try {
  //     const response = await axios.get('http://localhost:5001/notes')
  //     setNotes(response.data.notes)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   console.log(notes)
  // };

  let notesElement = notes.map((note) => {
    return <Note key={note._id} onNoteUpdated={onNoteUpdated} note={note} />;
  });

  return (
    <div className="App">
      <div>
        <div className="notes-list">{notesElement}</div>
      </div>
    </div>
  );
}

export default App;
