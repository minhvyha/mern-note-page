import React, { FC, FocusEvent } from "react";
import INote from "../interfaces/note.interface";

type Props = {
  note: INote;
  onNoteUpdated: (note: INote) => void;
  onDelete: (note: INote) => void;
};

const Note: FC<Props> = ({ note, onNoteUpdated, onDelete }) => {
  const noteTextUpdated = (event: FocusEvent<HTMLHeadingElement>) => {
    if (event.target.textContent === note.text) {
      return;
    }
    const newNote: INote = {
      ...note,
      text: event.currentTarget.textContent || "",
    };
    onNoteUpdated(newNote);
  };

  const onDeleteNote = () => {
    onDelete(note);
  };

  return (
    <div className="note">
      <span className="material-symbols-outlined cross" onClick={onDeleteNote}>
        close
      </span>
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
