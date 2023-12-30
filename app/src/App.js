import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import React, { useState } from 'react'
import Login from './components/Login'
import Main from './components/Main'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
function App () {
  const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken')
    return token !== null
  }

  return (
    <BrowserRouter>
      <div className='relative z-10 w-full'>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='*' element={<NotFound />}/>
          {
            isAuthenticated()
              ? <Route path='/main' element={<Main />}/>
              : <Route path="*" element={<Navigate to="/login" />} />
          }
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
