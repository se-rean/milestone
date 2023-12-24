import React, { useState } from 'react'

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleNode = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='cursor-pointer' onClick={toggleNode}>
      <div className="flex items-center">
        <div className="text-sm font-medium text-gray-900">{node.site_address}</div>
      </div>
      {expanded && (
        <div className="ml-8">
          <p>Contact Person: {node.contact_person}</p>
          <p>Phone #: {node.phone}</p>
          <p>Position: {node.position}</p>
          <p>Structure: {node.structure}</p>
          <p>Certification: {node.certification}</p>
          <p>Goal: {node.goal}</p>
        </div>
      )}
    </div>
  )
}

const Tree = ({ data }) => {
  return (
    (data.length > 0) &&
    <div className="flex flex-col">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((rootNode) => (
                  <tr key={rootNode.id}>
                    <td className="px-6 py-4 whitespace-nowrap  hover:bg-gray-100">
                      <TreeNode node={rootNode} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Tree
