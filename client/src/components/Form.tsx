import React, { FC } from "react";

type Props = {
  onCreate: () => void;
  handleClose: () => void;
  updateText: () => void;
  updateLink: () => void;
  error: String;
  isOpen: Boolean;
};

const Form: FC<Props> = ({
  onCreate,
  isOpen,
  error,
  handleClose,
  updateLink,
  updateText,
}) => {
  return isOpen ? (
    <div className="create-container">
      <div className="create-form">
        <div className="form-close-container">
          <span
            onClick={handleClose}
            className="material-symbols-outlined form-close"
          >
            close
          </span>
        </div>
        <div className="error" id="error-holder">
          {error}
        </div>
        <div className="form-text">
          <span>Text: </span>
          <input id="text-input" type="text" onChange={updateText} />
        </div>
        <div className="form-link">
          <span>Link: </span>
          <input id="link-input" type="text" onChange={updateLink} />
        </div>
        <div className="form-btn">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
          <button className="create-button" onClick={onCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Form;
