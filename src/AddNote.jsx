import React, { useState } from 'react'
import './App.css'

function AddNote({handleAddNote}) {
const [characterLimit,setCharacterLimit]=useState(100);
const [noteText,setNoteText]=useState('');
const handleChange=(e)=>{
    const {value}=e.target;
    if(characterLimit-value.length >=0){
      setNoteText(value);
    }
}
const handleSaveClick=(e)=>{
    if(noteText.trim().length >0){
      handleAddNote(noteText);
      setNoteText('');
    }
}
  return (
    <div className='note new'>
        <textarea name="" id="addNoteArea" cols="10" rows="8" value={noteText} placeholder='Type to add a note...' onChange={handleChange}></textarea>
        <div className="note-footer">
            <small>{characterLimit-noteText.length} remaining</small>
            <button className="save-btn" onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote