import React from 'react'
import Note from './Note'
import './NoteList.css'
import AddNote from './AddNote'

function NotesList({notes,handleAddNote,handleDeleteNote}) {
  return (
    <div className='notes-list'>
        {notes.map(note=>{
            return (
                <Note id={note.id} key={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            )
        })}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesList