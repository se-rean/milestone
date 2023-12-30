import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'
import logoutIco from '../assets/logout.svg'
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
    } else if (selected === 'Home') {
      setComponent(lazy(() => import('./DashBoard')))
    } else {
      setComponent(lazy(() => import('./UnderConstruction')))
    }
  }, [selected])

  return (
    <div className={'flex-grow px-4 transition-margin duration-300 ease-in-out'}>
      <div className='flex justify-between items-center bg-secondary'>
        <h1 className="text-3xl font-bold  text-[#15192C] p-5">{selected}</h1>
        <ul className='p-5 flex-row flex'>
          <h1 className='font-bold px-5'>{new Date(Date.now()).getDate()}/{new Date(Date.now()).getMonth() + 1}/{new Date(Date.now()).getFullYear()}</h1>
          <img alt='Logout' className="cursor-pointer " onClick={() => logout()} src={logoutIco}/>
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
