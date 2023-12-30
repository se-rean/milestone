// src/components/ToggleableSidebar.js
import DarkModeToggle from '../components/DarkModeToggle'
import React, {} from 'react'
import { Transition } from 'react-transition-group'

const Sidebar = ({ isOpen, onClose, onSelect }) => {
  const Menu = [
    { name: 'category', label: 'Menu' },
    { name: 'dashboard', label: 'Dashboard' },
    { name: 'category', label: 'Manage' }, // for creating menu category note: change label
    { name: 'company', label: 'Company' },
    { name: 'user', label: 'User' },
    { name: 'customer', label: 'Customer' }
  ]

  const duration = 300

  const defaultStyle = {
    transition: `width ${duration}ms ease-in-out`,
    width: isOpen ? '200px' : '100px'
  }

  const transitionStyles = {
    entering: { width: '100px' },
    entered: { width: '200px' },
    exiting: { width: '100px' },
    exited: { width: '100px' }
  }

  const handleOnSelect = (args) => {
    onSelect(args)
  }

  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          className="bg-gray-800 text-white p-4 h-full overflow-hidden flex flex-col gap-4"
        >
          <div
            className="bg-gray-800 text-white h-full overflow-hidden flex flex-col gap-4"
          >
            <img
              alt=''
              onClick={onClose}
              className="text-2xl font-bold mb-4"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiv8OnGDFr37sFZasBKlRrCZm46guLppTFo38z01XKQ&s'
            />
            <ul className=''>
              {
                Menu.map((item, index) => {
                  return item.name === 'category'
                    ? (<p className='text-gray-400 text-sm w-full mt-5 border-b my-4' key={item.name} >{item.label}</p>)
                    : (
                      <li key={item.name} onClick={() => handleOnSelect(item.label)} className="cursor-pointer mb-2 hover:underline hover:text-md px-5">{item.label}</li>
                    )
                })
              }
            </ul>
          </div>

          <div className='mt-10'>
            {/* <DarkModeToggle /> */}
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Sidebar
