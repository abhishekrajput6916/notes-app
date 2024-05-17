import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './App.css'
import { LightMode } from '@mui/icons-material';

function Header({darkMode,handleDarkModeToggle}) {
  return (
    <div className='header'>
        <h1>Notes</h1>
        
        <button 
        onClick={()=>{handleDarkModeToggle(prevState=>!prevState)}} className='dark-mode-btn'>
            {darkMode ?<LightMode/>:<DarkModeIcon/>}
            </button>
    </div>
  )
}

export default Header