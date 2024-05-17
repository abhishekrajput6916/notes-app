import { SearchSharp } from '@mui/icons-material'
import React from 'react'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
        <SearchSharp></SearchSharp>
        <input onChange={(e)=>{
            handleSearchNote(e.target.value)
        }} type="text" placeholder='Type to search...' />
    </div>
  )
}

export default Search