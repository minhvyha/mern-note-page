import React, { FC } from 'react'
import INote from '../interfaces/note.interface'

type Props ={
    note: INote
}

const Note: FC<Props> = ({note}) => {
  return (
    <div>
        <h4>{note.text}</h4>
        <h5>{note.link}</h5>
    </div>
  )
}

export default Note