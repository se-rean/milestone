import React, { useEffect, useState } from 'react'
import ManageUserModal from './ManageUserModal'
import httpClientRequest from '../lib/httpClientRequest'
import Modal from './Modal'
const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [fetchUsers, setFetchUsers] = useState([])
  const [viewCreateModal, setViewCreateModal] = useState(false)
  const [deleteItemId, setDeleteItemId] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [updateData, setupdateData] = useState([])
  const [forUpdate, setForUpdate] = useState([])

  const addUser = () => {
    setViewCreateModal(true)
    setForUpdate(false)
  }

  const closeModal = () => {
    setViewCreateModal(false)
    setupdateData([])
    setForUpdate(false)
  }

  const createUser = (data) => {
    setFetchUsers(true)
    closeModal()
  }

  useEffect(() => {
    getUsers()
  }, [setFetchUsers])

  const getUsers = async () => {
    setFetchUsers(true)
    const userList = await httpClientRequest.get('/user/')
    setUsers(userList)
    setFetchUsers(false)
  }

  const handleDelete = (id) => {
    setDeleteItemId(id)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setDeleteItemId(null)
    setFetchUsers(false)
  }

  const handleConfirmDelete = async () => {
    setFetchUsers(true)
    const companyData = await httpClientRequest.delete(`/user/?user_id=${deleteItemId}`)
    handleCloseModal()
    setFetchUsers(false)
  }

  const setUpdateData = (user) => {
    setViewCreateModal(true)
    setFetchUsers(true)
    setupdateData(user)
    setForUpdate(true)
  }

  return (
    <div className="flex justify-around h-full w-full bg-secondary p-5">
      {/* Input Div */}
      {isModalOpen && (<Modal.DeleteModal handleCloseModal={handleCloseModal} handleConfirmDelete={handleConfirmDelete}/>)}
      { viewCreateModal && <ManageUserModal update={forUpdate} updateData={updateData} createUser={createUser} closeModal={closeModal} /> }
      {/* Table Div */}
      <div className="border p-4 w-1/2 flex-1 overflow-scroll  rounded-md bg-primary">
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
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.length > 0 && users.data.map((user, index) => (
              <tr key={index}>
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.first_name} {user.last_name}</td>
                <td className="border p-2">{user.department}</td>
                <td className="border p-2">{user.position}</td>
                <td className="border p-2">{user.phone_no}</td>
                <td className="border p-2">{user.site_address}</td>
                <td className="border p-2">{user.country}</td>
                <td className="border p-2">{user.state}</td>
                <td className="border p-2">{user.suburb}</td>
                <td className="border p-2">{user.MFA}</td>
                <td className="border p-2">{user.role}</td>
                <td className="flex flex-row px-6 py-4 gap-2 items-center align-center justify-center">
                  <a onClick={() => setUpdateData(user)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                  <a onClick={() => handleDelete(user.id)} href="#" className="font-medium text-red-500 dark:text-blue-500 hover:underline">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement
