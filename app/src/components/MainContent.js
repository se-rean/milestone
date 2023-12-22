import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function MainContent ({ selected }) {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  const [Component, setComponent] = useState(lazy(() => import('./DashBoard')))

  useEffect(() => {
    if (selected === 'Company') {
      setComponent(lazy(() => import('./Company')))
    } else if (selected === 'User') {
      setComponent(lazy(() => import('./Users')))
    } else if (selected === 'Dashboard') {
      setComponent(lazy(() => import('./DashBoard')))
    }
  }, [selected])

  return (
    <div className={'flex-grow px-4 transition-margin duration-300 ease-in-out'}>
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl font-bold  text-blue-500">{selected}</h1>
        <ul className='cursor-pointer'>
          <li onClick={() => logout()} className="text-md font-bold mb-4 hover:underline">Logout</li>
        </ul>
      </div>
      {/* Your dashboard content goes here */}
      <div className="flex items-center justify-center h-[90vh] bg-gray-100">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  )
}
