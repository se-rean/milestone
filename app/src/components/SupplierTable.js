import React from 'react'
// import Tree from './TreeNode'
// import FilePreview from '../FilePreview'
const SupplierTable = ({ filteredSites, handleDelete }) => (
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

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600">
          <td className="flex flex-row px-6 py-4 gap-2 items-center align-center justify-center">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
            </a>
            <a onClick={() => handleDelete()} href="#" className="font-medium text-red-500 dark:text-blue-500 hover:underline">
                Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default SupplierTable
