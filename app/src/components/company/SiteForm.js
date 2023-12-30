// SiteForm.js
import React from 'react'
import SiteEntry from './SiteEntry'

const SiteForm = ({ sites, handleInputChange, handleSiteInputChange, removeSite, addNewSite }) => (
  <div className='w-full gap-5 flex flex-col'>
    <h1>Create New Company</h1>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_company_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => handleInputChange('floating_company_name', 'company_name', e.target.value)} required/>
        <label htmlFor="floating_company_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company name</label>

      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_address_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
          onChange={(e) => handleInputChange('floating_address_name', 'address', e.target.value)}
          required />
        <label htmlFor="floating_address_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address 1</label>
      </div>
    </div>

    {sites.map((site, index) => (
      <SiteEntry
        key={site.id}
        site={site}
        index={index}
        handleInputChange={handleSiteInputChange}
        removeSite={removeSite}
      />
    ))}
    <span onClick={addNewSite} className="cursor-pointer w-[80px] text-center bg-blue-400 p-2 text-[10px] rounded-lg text-white">New Site</span>
  </div>
)

export default SiteForm
