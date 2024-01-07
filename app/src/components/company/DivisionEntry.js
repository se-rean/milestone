import React, { useState } from 'react'

const DivisionEntry = ({ sites }) => {
  const initialFields = [
    { name: 'department_name', label: 'Department', value: '' },
    { name: 'department _responsible_person', label: 'Department Responsible person', value: '' }
  ]

  const [divs, setDivs] = useState([{ id: 1, fields: initialFields }]) // Initial array with one div
  const [nextDivId, setNextDivId] = useState(2) // Initial value for the next div id

  const handleAddDiv = () => {
    setDivs(prevDivs => [...prevDivs, { id: nextDivId, fields: initialFields }])
    setNextDivId(prevNextDivId => prevNextDivId + 1)
  }

  const handleRemoveDiv = (divIdToRemove) => {
    setDivs(prevDivs => prevDivs.filter(div => div.id !== divIdToRemove))
  }

  const handleFieldChange = (divId, fieldName, value) => {
    setDivs(prevDivs => prevDivs.map(div =>
      div.id === divId
        ? {
          ...div,
          fields: div.fields.map(field =>
            field.name === fieldName ? { ...field, value } : field
          )
        }
        : div
    ))
  }

  return (
    <div>
      {divs.map(({ id, fields }, index) => (
        <div key={id} className="grid md:grid-cols-1 md:gap-6 mt-5 bg-secondary border-2 p-1">
          <div className="relative z-0 w-full pb-4 group bg-primary p-5">
            <div className='flex justify-between pb-4'>
              <h1>Department {index + 1}</h1>
              <button className='bg-red-500 hover:bg-accent text-primary hover:text-textPrimary border rounded-md px-[20px] py-[5px] ' onClick={() => handleRemoveDiv(id)}>Remove</button>
            </div>
            <div className=''>
              {fields.map(field => (
                <div key={field.name} className="mb-4 relative z-0">
                  {field.options
                    ? (
                      <>
                        <label htmlFor={field.name} className="absolute text-sm text-textAccent dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{field.label}</label>
                        <select
                          id={field.name}
                          value={field.value}
                          onChange={(e) => handleFieldChange(id, field.name, e.target.value)}
                          className="mt-1 p-2 border rounded w-full"
                          required
                        >
                          {field.options.map((option) => (
                            <option key={option.name} value={option.name}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </>
                    )
                    : (
                      <div>
                        <div className="relative z-0">
                          <input
                            value={field.value}
                            onChange={(e) => handleFieldChange(id, field.name, e.target.value)}
                            type="text"
                            id={field.name}
                            aria-describedby="standard_success_help"
                            className="block py-2.5 px-0 w-full text-sm text-textAccent bg-transparent border-0 border-b-2 border-textAccent appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                          />
                          <label htmlFor={field.name} className="absolute text-sm text-textAccent dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{field.label}</label>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <button className='bg-secondary hover:bg-accent text-gray-600 hover:text-textPrimary border rounded-md px-[20px] py-[5px] ' onClick={handleAddDiv}>New Division</button>
    </div>
  )
}

export default DivisionEntry
