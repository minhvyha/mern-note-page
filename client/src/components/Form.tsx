import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: { text: string; link: string };
};

const Form: FC<Props> = ({ onCreate }) => {
    return (
        <>
          <input type="text" />
        </>
    )
};

export default Form;
