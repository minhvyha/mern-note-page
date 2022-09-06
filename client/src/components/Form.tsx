import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: (text: string, link: string) => void;
  handleClose: () => void;
  isOpen: Boolean;
};

const Form: FC<Props> = ({ onCreate, isOpen, handleClose }) => {
  return (
    <div className="create-container">
      <div className="create-form">
        <div className="form-close-container">
          <span className="material-symbols-outlined form-close">close</span>
        </div>
        <div className="form-text">
          <span>Text: </span>
          <input type="text" />
        </div>
        <div className="form-link">
          <span>Link: </span>
          <input id="link-input" type="text" />
        </div>
        <div className="form-btn">
          <button>Close</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
