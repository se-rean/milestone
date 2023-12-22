// Company.js
import React, { useState } from 'react'
import CompanyTable from './company/CompanyTable'
import SiteForm from './company/SiteForm'

const Company = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const [addNew, setAddNew] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sites, setSites] = useState([{}])
  const [company, setCompany] = useState([])

  const addNewSite = () => {
    setSites(prevSites => [...prevSites, { id: Date.now(), phone: '', company: '' }])
  }

  const removeSite = (id) => {
    setSites(prevSites => prevSites.filter(site => site.id !== id))
  }

  const handleInputChange = (id, field, value) => {
    setSites(prevSites =>
      prevSites.map(site =>
        site.id === id ? { ...site, [field]: value } : site
      )
    )
  }

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
    document.body.classList.toggle('dark', !isDarkMode)
  }

  const toggleAddNew = () => {
    setAddNew(!addNew)
  }

  const filteredSites = company.filter(item =>
    item.company.includes(searchTerm)
  )

  return (
    <div className='h-full w-full bg-background'>
      <div className='h-[90vh] justify-around flex gap-2  p-5'>
        <div id='data' className='flex gap-2 h-full flex-1 flex-col  bg-secondary'>
          <div className='w-full h-[3rem] bg-secondary flex justify-between px-5 border border-cyan-400'>
            <div className="pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">Search</label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for category"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button onClick={() => toggleAddNew()}>{addNew ? 'Cancel' : 'Register New'}</button>
          </div>

          <CompanyTable filteredSites={filteredSites} />
        </div>
        <div id='table' className={`flex overflow-y-scroll ${addNew ? '' : 'hidden'} bg-secondary w-[50rem] p-5`}>
          <SiteForm
            sites={sites}
            handleInputChange={handleInputChange}
            removeSite={removeSite}
            addNewSite={addNewSite}
          />
        </div>
      </div>
    </div>
  )
}

export default Company
