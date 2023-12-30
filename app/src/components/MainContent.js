import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'

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
    } else {
      setComponent(lazy(() => import('./UnderConstruction')))
    }
  }, [selected])

  return (
    <div className={'flex-grow px-4 transition-margin duration-300 ease-in-out'}>
      <div className='flex justify-between items-center bg-secondary'>
        <h1 className="text-3xl font-bold  text-blue-500 p-5">{selected}</h1>
        <ul className='cursor-pointer'>
          <li onClick={() => logout()} className="text-md font-bold mb-4 hover:underline">Logout</li>
        </ul>
      </div>
      {/* Your dashboard content goes here */}
      <div className="flex items-center justify-center h-[90vh]">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <Component />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  )
}
