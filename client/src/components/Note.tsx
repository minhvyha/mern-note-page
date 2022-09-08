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
  const getClickableLink = (link: string) => {
    return link.startsWith("http://") || link.startsWith("https://")
      ? link
      : `http://${link}`;
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
      <a href={getClickableLink(note.link)} className="note-link" target='_blank'>
        Link
      </a>
    </div>
  );
};

export default Note;
