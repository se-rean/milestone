import React, { useState } from 'react'
import CreateUserModal from './CreateUserModal'

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [viewCreateModal, setViewCreateModal] = useState(false)

  const addUser = () => {
    setViewCreateModal(true)
  }

  const closeModal = () => {
    setViewCreateModal(false)
  }

  const createUser = (data) => {
    alert('user created')
    console.log(data)
  }

  return (
    <div className="flex justify-around h-full w-full bg-white">
      {/* Input Div */}
      { viewCreateModal && <CreateUserModal createUser={createUser} closeModal={closeModal} /> }
      {/* Table Div */}
      <div className="border p-4 w-1/2 flex-1">
        <h2 className="text-lg font-semibold mb-4">Users Table</h2>
        <h2 onClick={addUser} className="text-lg font-semibold mb-4 border-2 border-cyan-100 w-28 px-2 hover:bg-primary rounded-md text-center text-slate-600 cursor-pointer text-gray-200">Add New</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Position</th>
              <th className="border p-2">Phone No.</th>
              <th className="border p-2">Site Address</th>
              <th className="border p-2">Country</th>
              <th className="border p-2">State</th>
              <th className="border p-2">SubUrb</th>
              <th className="border p-2">Expiration Date</th>
              <th className="border p-2">MFA</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement
