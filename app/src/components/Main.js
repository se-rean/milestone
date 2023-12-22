// src/App.js

import React, { useState } from 'react'
import ToggleableSidebar from '../Layout/SideBar'
import MainContent from './MainContent' // Import your menu icon

function Main () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selected, setSelected] = useState('DashBoard')

  const handleOnSelect = (args) => {
    setSelected(args)
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen">
      <ToggleableSidebar onSelect={handleOnSelect} isOpen={isSidebarOpen} onClose={handleToggleSidebar} />
      <MainContent selected={selected}/>
    </div>
  )
}

export default Main
