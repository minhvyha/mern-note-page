import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: (text: string, link: string) => void;
};

const Form: FC<Props> = ({ onCreate }) => {
  return (
    <>
      <div>
        <span>Text: </span>
        <input type="text" />
      </div>
      <div>
        <span>Link: </span>
        <input id="link-input" type="text" />
      </div>
    </>
  );
};

export default Form;
