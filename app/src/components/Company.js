// Company.js
import React, { useEffect, useState } from 'react'
import CompanyTable from './company/CompanyTable'
import SiteForm from './company/SiteForm'
import httpClientRequest from '../lib/httpClientRequest'
import Modal from './Modal'
const Company = () => {
  const [addNew, setAddNew] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sites, setSites] = useState([{}])
  const [company, setCompany] = useState([])
  const [fields, setFields] = useState([])
  const [fetchingData, setFetchingData] = useState(true)
  const [saving, setSaving] = useState(false)
  const [pageSize] = useState(10)
  const [page, setPage] = useState(1)
  const [deleteItemId, setDeleteItemId] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    setFetchingData(true)
    fetchData()
  }, [page, saving === true])

  const fetchData = async () => {
    const companyData = await httpClientRequest.get(`/company/?page=${page}&page_size=${pageSize}`)
    setCompany(companyData)
    console.log(companyData)
    setFetchingData(false)
  }

  const addNewSite = () => {
    setSites(prevSites => [...prevSites, { id: Date.now(), phone: '', company: '' }])
  }

  const removeSite = (id) => {
    setSites(prevSites => prevSites.filter(site => site.id !== id))
  }

  const handleSiteInputChange = (id, field, value) => {
    setSites(prevSites =>
      prevSites.map(site =>
        site.id === id ? { ...site, [field]: value } : site
      )
    )
  }

  const handleInputChange = (id, field, value) => {
    console.log(id, field, value)
    setFields({ ...fields, [field]: value })
  }

  const createNewCompany = async (e) => {
    e.preventDefault()
    setSaving(true)
    console.log(fields)
    const payload = {
      company_name: fields.company_name,
      address: fields.address,
      sites
    }

    const companyData = await httpClientRequest.post('/company', payload)
    console.log('payload', companyData)

    setSaving(false)
  }

  const toggleAddNew = () => {
    setAddNew(!addNew)
    setSites([{}])
    setFields([])
    console.log(sites)
  }

  let filteredSites = []
  if (!fetchingData && company.data) {
    filteredSites = company.data.rows.filter(item =>
      item.company_name.includes(searchTerm)
    )

    console.log(filteredSites)
  }

  const handleDelete = (id) => {
    console.log(id)
    setDeleteItemId(id)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setDeleteItemId(null)
  }

  const handleConfirmDelete = async () => {
    setSaving(true)
    const companyData = await httpClientRequest.delete(`company/?company_id=${deleteItemId}`)
    console.log(`Deleting item with id: ${deleteItemId}`)
    // Close the modal
    setSaving(false)
    handleCloseModal()
  }

  return (
    <div className='h-full w-full bg-background'>

      <div className='h-[90vh] justify-around flex gap-2  p-5'>
        <div id='data' className='flex gap-2 h-full flex-1 flex-col  bg-secondary'>
          {isModalOpen && (<Modal.DeleteModal handleCloseModal={handleCloseModal} handleConfirmDelete={handleConfirmDelete}/>)}
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
                  placeholder="Search for Company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <button onClick={() => toggleAddNew()}>{addNew ? 'Cancel' : 'Register New'}</button>
          </div>

          {!fetchingData && (<CompanyTable handleDelete={handleDelete} filteredSites={filteredSites} />) }
          <div className='w-full h-[3rem] bg-secondary flex justify-between px-5 '>
            {!fetchingData && <button className='underline' onClick={() => page > 1 ? setPage(page - 1) : ''}>Prevous Page</button> }
            <label>Page {page}</label>
            {!fetchingData && <button className='underline' onClick={() => company.data.count / pageSize > page ? setPage(page + 1) : ''}>Next Page</button> }
          </div>
        </div>

        <div id='table' className={`flex overflow-y-scroll ${addNew ? '' : 'hidden'} bg-secondary w-[50rem] p-5`}>
          <form onSubmit={(e) => createNewCompany(e)} className="w-[40rem] mx-auto m-5">
            <SiteForm
              sites={sites}
              handleInputChange={handleInputChange}
              handleSiteInputChange={handleSiteInputChange}
              removeSite={removeSite}
              addNewSite={addNewSite}
            />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Company
