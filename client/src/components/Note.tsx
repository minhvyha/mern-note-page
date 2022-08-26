import React, { FC } from 'react'
import INote from '../interfaces/note.interface'

type Props ={
    note: INote
}

const Note: FC<Props> = ({note}) => {
  return (
    <div className='note'>
        <h4 className='note-text'>{note.text}</h4>
        <a href={note.link}>{note.link}</a>
    </div>
  )
}

export default Note