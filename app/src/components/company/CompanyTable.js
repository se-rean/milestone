import React from 'react'
import Tree from '../TreeNode'
import FilePreview from '../FilePreview'
const CompanyTable = ({ filteredSites, handleDelete }) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Company name
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            Sites
          </th>
          <th scope="col" className="px-6 py-3">
            File
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredSites.map((site) => (
          <tr key={site.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {site.company_name}
            </th>
            <td className="px-6 py-4">
              {site.address}
            </td>
            <td className="px-6 py-4 whitespace-nowrap ">
              <Tree data={site.sites}/>
            </td>
            <td className="px-6 py-4 whitespace-nowrap h-10 w-10">
              <FilePreview file={site.file_upload}/>
            </td>
            <td className="flex flex-row px-6 py-4 gap-2 items-center align-center justify-center">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
              <a onClick={() => handleDelete(site.company_id)} href="#" className="font-medium text-red-500 dark:text-blue-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default CompanyTable
