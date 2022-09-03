import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: (text: string, link: string) => void;
};

const Form: FC<Props> = ({ onCreate }) => {
  return (
    <div className="create-container">
      <div className="create-form">
        <div>
          <span>Text: </span>
          <input type="text" />
        </div>
        <div>
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
