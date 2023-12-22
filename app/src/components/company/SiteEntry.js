// SiteEntry.js
import React from 'react'

const SiteEntry = ({ site, index, handleInputChange, removeSite }) => (
  <div className="grid md:grid-cols-1 md:gap-6 mt-5">
    <div key={site.id} className="relative z-0 w-full mb-5 group bg-secondary">
      <div className='flex justify-between'>
        <h1>Site {index + 1}</h1>
        {index > 0 && (<a href='#' onClick={() => removeSite(site.id)}>Remove</a>)}
      </div>
      <div className='flex-col grid md:grid-cols-2 md:gap-6'>
        <input
          type="text"
          name={`floating_contactPerson_${site.id}`}
          id={`floating_contactPerson_${site.id}`}
          value={site.contactPerson}
          onChange={(e) => handleInputChange(site.id, 'contactPerson', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Contact Person"
          required
        />
        <input
          type="text"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name={`floating_phone_${site.id}`}
          id={`floating_phone_${site.id}`}
          value={site.phone}
          onChange={(e) => handleInputChange(site.id, 'phone', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name={`floating_position_${site.id}`}
          id={`floating_position_${site.id}`}
          value={site.position}
          onChange={(e) => handleInputChange(site.id, 'position', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Title/Position"
          required
        />

        <input
          type="text"
          name={`floating_structure_${site.id}`}
          id={`floating_structure_${site.id}`}
          value={site.structure}
          onChange={(e) => handleInputChange(site.id, 'structure', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="organisation structure"
          required
        />

        <input
          type="text"
          name={`floating_certification_${site.id}`}
          id={`floating_certification_${site.id}`}
          value={site.certification}
          onChange={(e) => handleInputChange(site.id, 'certification', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Certification"
          required
        />

        <input
          type="text"
          name={`floating_goal_${site.id}`}
          id={`floating_goal_${site.id}`}
          value={site.goal}
          onChange={(e) => handleInputChange(site.id, 'goal', e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="strategic goals"
          required
        />
      </div>
    </div>
  </div>
)

export default SiteEntry
