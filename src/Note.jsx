import React, { useEffect } from 'react'
import './Note.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note({id,text,date,handleDeleteNote}) {
  return (
    <div className='note'>
        <div>{text}</div>
        <div className='note-footer'>
            <div>{date}</div>
            <DeleteForeverIcon onClick={()=>handleDeleteNote(id)} className='delete-icon'/>
        </div>        
    </div>
  )
}

export default Note