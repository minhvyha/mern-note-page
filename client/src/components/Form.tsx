import React, { FC, FocusEvent } from "react";

type Props = {
  onCreate: (text: string, link: string) => void
};

const Form: FC<Props> = ({ onCreate }) => {
    return (
        <>
          <input type="text" />
        </>
    )
};

export default Form;
