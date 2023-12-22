import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()

  const handleSubmit = (args) => {
    args.preventDefault()
    navigate('/main')
  }

  return (
    <div className="min-h-screen mt-[-10rem] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Log in
        </button>
      </form>
    </div>
  )
}
