import { useState, useEffect } from 'react'
import axios from 'axios';
import NOTES from './DUMMYNOTES';
import { nanoid } from 'nanoid';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState<Array<any>>([])

  useEffect(() =>{
    setNotes(NOTES)
  }, [])

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

  let notesElement = notes.map(note =>{
    return(
      <Note 
        key={nanoid()}
        note={note}
      />
      
    )
  })



  return (
    <div className="App">
      <div>
        <div className="notes-list">
          {notesElement}
        </div>
      </div>
    </div>
  );
}

export default App;
