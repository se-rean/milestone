// src/App.js

import React, { useState } from 'react'
import ToggleableSidebar from '../Layout/SideBar'
import MainContent from './MainContent' // Import your menu icon
import AuthenticateUser from '../lib/AuthenticateUser'
function Main () {
  AuthenticateUser()

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selected, setSelected] = useState('Home')

  const handleOnSelect = (args) => {
    setSelected(args)
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-secondary">
      <ToggleableSidebar onSelect={handleOnSelect} isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      <MainContent selected={selected}/>
    </div>
  )
}

export default Main
