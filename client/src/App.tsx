import { useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState<Array<any>>([])
  const getNotes = async () =>{
    try {
      const response = await axios.get('http://localhost:5001/notes')
      setNotes(response.data.notes)
    }
    catch(err){
      console.log(err)
    }
    console.log(notes)
  };

  let notesElement = notes.map(note =>{
    return(
      <>
        <h2>{note?.text}</h2>
        <h5>{note?.link}</h5>
      </>
    )
  })



  return (
    <div className="App">
      <div>
        <h1>Notes Application</h1>
      </div>
      
      <div>
        <button onClick={getNotes}>Click Me!</button>
      </div>

      <div className="data">
        {notesElement}
      </div>
    </div>
  );
}

export default App;
