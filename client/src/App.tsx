import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import INote from "./interfaces/note.interface";

function App() {
  const [notes, setNotes] = useState<Array<INote>>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const onNoteUpdated = (note: INote) => {
    setNotes((notes) =>
      notes.map((oldNote: INote) => {
        return note._id === oldNote._id ? note : oldNote;
      })
    );
    axios.post('http://localhost:3001/modifyNote', note)
  };

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getNote");
      setNotes(response.data)
    } catch (err) {
      console.log(err);
    }
  };
  
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
