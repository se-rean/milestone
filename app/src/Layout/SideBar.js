// src/components/ToggleableSidebar.js
import DarkModeToggle from '../components/DarkModeToggle'
import React, {} from 'react'
import { Transition } from 'react-transition-group'

const Sidebar = ({ isOpen, onClose, onSelect }) => {
  const Menu = [
    { name: 'category', label: 'Menu' },
    { name: 'dashboard', label: 'Dashboard' },
    { name: 'category', label: 'Manage' }, // for creating menu category note: change label
    { name: 'customer', label: 'Customer' },
    { name: 'company', label: 'Company' },
    { name: 'compliance', label: 'Compliance' },
    { name: 'documents', label: 'Documents' },
    { name: 'risk', label: 'Risk' }
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
          className="bg-accent text-white  h-full flex flex-col gap-4"
        >
          <div
            className="w-fullh-full overflow-hidden flex flex-1 flex-col gap-4 "
          >
            <img
              alt=''
              onClick={onClose}
              className="text-2xl font-bold mb-4 pt-[30px] px-[38px]"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiv8OnGDFr37sFZasBKlRrCZm46guLppTFo38z01XKQ&s'
            />
            <ul className='pt-[30px] px-[40px] gap-4 flex flex-col overflow-auto scrollbar'>
              {
                Menu.map((item, index) => {
                  return item.name === 'category'
                    ? (<p className='text-gray-400 text-sm w-full mt-5 border-b my-4' key={item.name} >{item.label}</p>)
                    : (
                      <li key={item.name} onClick={() => handleOnSelect(item.label)} className="cursor-pointer mb-2 hover:underline hover:text-md text-textSecondary rounded-[38.05px] w-auto text-center p-2 hover:text-textPrimary hover:bg-textBackground">{item.label}</li>
                    )
                })
              }
            </ul>
          </div>

          <div className='mt-10'>
            {/* <DarkModeToggle /> */}
            <h1 className='text-center text-textPrimary text-sm'>Version 1.0.0.1</h1>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Sidebar
