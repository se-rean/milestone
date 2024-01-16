/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react'
import httpClientRequest from '../lib/httpClientRequest'
import ErrorBoundary from '../ErrorBoundary'
// eslint-disable-next-line react/no-unknown-property
export default function CreateSupplierModal ({
  handleSubmit, closeModal, createUser, update = false,
  updateData = {}
}) {
  const [users, setUsers] = useState([])
  const [supplierType, setSupplierType] = useState(null)

  const [fields, setFields] = useState([])

  const addSupplier = async (e) => {
    e.preventDefault()
    // Create a user object with field values
  }

  const selectSupplier = (e) => {
    console.log(e.target.value)
    setSupplierType(e.target.value)
  }

  useEffect(() => {
    if (supplierType === 'new') {
      setFields([
        { name: 'supplierName', label: 'Supplier name ', value: '' },
        { name: 'supplierTradingAs', label: 'Supplier trading as ', value: '' },
        { name: 'companyRegistrationAbnNo', label: 'Company registration ABN no.', value: '' },
        { name: 'companyRegistrationAcnNo', label: 'Company registration ACN no. ', value: '' },
        { name: 'website', label: 'Website ', value: '' },
        { name: 'bsb', label: 'BSB', value: '' },
        { name: 'bankAccountNumber', label: 'Bank Account Number', value: '' },
        { name: 'bankAccountName', label: 'Bank Account Name', value: '' },
        { name: 'localOrOverseasSupplier', label: 'Local / Overseas supplier ', value: '' },
        { name: 'supplierAddress', label: 'Supplier address', value: '' },
        { name: 'country', label: 'Country ', value: '' },
        { name: 'state', label: 'State', value: '' },
        { name: 'subUrb', label: 'Suburb', value: '' },
        { name: 'postCode', label: 'Postcode', value: '' },
        { name: 'contactPersonName', label: 'Contact person name', value: '' },
        { name: 'supplierPhoneNumber', label: 'Phone number ', value: '' },
        { name: 'supplierEmailId', label: 'Email id ', value: '' },
        { name: '24x7ContactPersonName', label: '24x7 contact person name (if any) ', value: '' },
        { name: 'contactPersonPhoneNumber', label: 'Phone number ', value: '' },
        { name: 'contactPersonEmailId', label: 'Email id ', value: '' },
        { name: 'paymentTerms', label: 'Payment terms', value: '' },
        { name: 'specialConditionsOrAdditionalNotes', label: 'Special conditions or additional notes ', value: '' },
        { name: 'supplierCategory', label: 'Supplier category ', value: '' },
        { name: 'serviceManaged', label: 'Service managed (if any) ', value: '' },
        { name: 'purposeOfSupplier', label: 'Purpose of supplier ', value: '' },
        { name: 'dataSharedWithSupplier', label: 'Data shared with supplier ', value: '' },
        { name: 'departmentManagingSupplier', label: 'Department managing supplier ', value: '' },
        { name: 'supplierOwner', label: 'Supplier owner ', value: '' },
        { name: 'slaDetails', label: 'SLA details ', value: '' },
        { name: 'creditLimit', label: 'Credit limit ', value: '' },
        { name: 'ISO27001', label: 'ISO 27001 Certified and valid', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'ISO9001', label: 'ISO 9001 Certified and valid', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'ISO14001', label: 'ISO 14001 Certified and valid ', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'ISO45001', label: 'ISO 45001 Certified and valid ', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'modernSlaveryActApplicable', label: 'Modern Slavery Act applicable ', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'modernSlaveryStatementPublishedDate', label: 'Modern Slavery Statement published date', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'anyOtherCertification', label: 'Any other certification', value: '', options: [{ name: 'Yes' }, { name: 'No' }] },
        { name: 'estimatedAnnualBudgetValue', label: 'Estimated annual budget value ', value: '' },
        { name: 'contractCommencementDate', label: 'Contract Commencement date ', value: '' },
        { name: 'contractEndDate', label: 'Contract end date ', value: '' }
      ])
    } else if (supplierType === 'existing') {
      setFields([
        { name: 'username', label: 'Username', value: '' },
        { name: 'email', label: 'Email', value: '' },
        { name: 'first_name', label: 'First Name', value: '' },
        { name: 'last_name', label: 'Last Name', value: '' },
        { name: 'department', label: 'Department', value: '' },
        { name: 'position', label: 'Position', value: '' },
        { name: 'phone_no', label: 'Phone No.', value: '' }
      ])
    }
  }, [supplierType])

  const handleFieldChange = (name, value) => {
    setFields((prevFields) => {
      const fieldIndex = prevFields.findIndex((field) => field.name === name)
      const updatedFields = [...prevFields]
      updatedFields[fieldIndex].value = value
      return updatedFields
    })

    const mappedData = fields.reduce((acc, cur) => {
      return { ...acc, [cur.name]: cur.value }
    }, {})
    console.log(mappedData)
  }

  return (
    <ErrorBoundary>
      <form >
        <div className="fixed inset-0 z-10 overflow-y-auto rounded-lg ">
          <div className="flex items-end justify-center min-h-screen h-40 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            {/* ... (unchanged code) */}
            <div className="inline-block align-bottom bg-white border-2 rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle w-[70vh]">
              {/* Modal content */}
              <div className="bg-primary px-4 rounded-lg pt-5 pb-4 sm:p-6 sm:pb-4 !important rounded-lg">
                <div className="border p-4 bg-primary rounded-lg">
                  <div className='pb-5'>
                    <h2 className="text-lg font-semibold mb-4">Create Suppliers</h2>

                    <select
                      id={supplierType}
                      value={supplierType}
                      onChange={(e) => selectSupplier(e)}
                      className="mt-1 p-2 border rounded-lg w-35"
                      required
                    >
                      <option selected={true} disabled={true} key='1' value=''>
                        Choose Supplier Type
                      </option>
                      <option key='new' value='new'>
                        New Supplier
                      </option>
                      <option key='existing' value='existing'>
                        Existing Supplier
                      </option>
                    </select>
                  </div>
                  { fields.length > 0 &&
                    fields.map((field) => (
                      <div key={field.name} className="mb-4 relative z-0">
                        {field.options
                          ? (
                            <><label for={field.name} class="absolute text-sm text-textAccent dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{field.label}</label><select
                              id={field.name}
                              value={field.value}
                              onChange={(e) => handleFieldChange(field.name, e.target.value)}
                              className="mt-1 p-2 border rounded w-full"
                              required
                            >
                              {field.options.map((option) => (
                                <option key={option.name} value={option.name}>
                                  {option.name}
                                </option>
                              ))}
                            </select></>
                          )
                          : (
                            <div>
                              <div class="relative z-0">
                                <input value={field.value} onChange={(e) => handleFieldChange(field.name, e.target.value)} type="text" id={field.name} aria-describedby="standard_success_help" class="block py-2.5 px-0 w-full text-sm text-textAccent bg-transparent border-0 border-b-2 border-textAccent appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
                                <label for={field.name} class="absolute text-sm text-textAccent dark:text-green-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{field.label}</label>
                              </div>
                              {/* <p id="standard_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium">Well done!</span> Some success message.</p> */}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg">
                <button
                  onClick={() => closeModal()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
            Cancel
                </button>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">{(update === true) ? 'Update User' : 'Save User'}</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  )
}
