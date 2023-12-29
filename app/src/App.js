import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import React, { useState } from 'react'
import Login from './components/Login'
import Main from './components/Main'

function App () {
  return (
    <BrowserRouter>
      <div className='relative z-10 w-full'>
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route path='/' element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
