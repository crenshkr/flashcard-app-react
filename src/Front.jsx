import React from 'react'
import './App.css';


function Front() {
  return (
    <div className='front'>
        <p className='logo'>myCards</p>
        <button className='front'>EDIT</button>
        <input className='front'></input>
        <button className='front'>SAVE</button>
        <button className='front'>DELETE</button>
    </div>
  )
}

export default Front