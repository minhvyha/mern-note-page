import React, { FC, FocusEvent } from "react";
import INote from "../interfaces/note.interface";

type Props = {
  note: INote;
  onNoteUpdated: (note: INote) => void;
  id: string;
};

const Note: FC<Props> = ({ note, onNoteUpdated }) => {

  const noteTextUpdated = (event: FocusEvent<HTMLHeadingElement>) => {

    onNoteUpdated(event.currentTarget.textContent)
  };

  return (
    <div className="note">
      <h4
        onBlur={noteTextUpdated}
        suppressContentEditableWarning={true}
        className="note-text"
        contentEditable
      >
        {note.text}
      </h4>
      <a href={note.link} className="note-link">
        {note.link}
      </a>
    </div>
  );
};

export default Note;
