import React, { FC } from "react";
import INote from "../interfaces/note.interface";

type Props = {
  note: INote;
};

const noteTextUpdated = () =>{
  
}

const Note: FC<Props> = ({ note }) => {
  return (
    <div className="note">
      <h4 onInput={} suppressContentEditableWarning={true} className="note-text" contentEditable>
        {note.text}
      </h4>
      <a href={note.link} className="note-link">
        {note.link}
      </a>
    </div>
  );
};

export default Note;
