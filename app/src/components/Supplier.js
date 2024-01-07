import React, { useState } from 'react'
import SupplierTable from './SupplierTable'
import CreateSupplierModal from './CreateSupplierModal'
export default function Supplier () {
  const [viewCreateModal, setViewCreateModal] = useState(false)

  const createNew = () => {
    setViewCreateModal(true)
  }

  const closeModal = () => {
    setViewCreateModal(false)
  }

  return (
    <div className='bg-primary w-full h-full rounded-md border-2 '>
      { viewCreateModal && <CreateSupplierModal closeModal={closeModal}/> }
      <div className='p-5'>
        <div className='flex items-center gap-5 justify-between'>
          <div className="rounded-md border dark:bg-gray-900">
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
                className="block ps-10 text-md text-gray-900 border border-secondary rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for Company"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => createNew()} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add Supplier</button>
        </div>
        <SupplierTable />
      </div>
    </div>
  )
}
