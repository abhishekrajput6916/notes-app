import { useEffect, useState } from 'react';
import './App.css';
import NotesList from './NotesList';
import { nanoid } from 'nanoid'
import Search from './Search';
import Header from './Header';
function App() {
  const [searchText,setSearchText]=useState('');
  const [darkMode,setDarkMode]=useState(false);
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('react-notes-app-data')));
useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])
useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))
  console.log(savedNotes);
  if(savedNotes){
    console.log('saved notes fetched',savedNotes);
    setNotes(savedNotes)
  }else 
    console.log('not fetched');
},[])
function addNote(text){
  console.log(text);
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);
}
function deleteNote(id){
  console.log(id,notes);
  const newNotes=notes.filter((note)=>note.id !== id)
  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header darkMode={darkMode} handleDarkModeToggle={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  );
}

export default App;
