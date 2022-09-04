import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: (text: string, link: string) => void;
};

const Form: FC<Props> = ({ onCreate }) => {
  return (
    <div className="create-container">
      <div className="create-form">
        <div className="form-text">
          <span>Text: </span>
          <input type="text" />
        </div>
        <div className="form-link">
          <span>Link: </span>
          <input id="link-input" type="text" />
        </div>
        <div>
          <button>Close</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
