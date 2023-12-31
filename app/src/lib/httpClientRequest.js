import axios from 'axios'
import { decryptFromStorage } from './SecureStorage'
const user = await decryptFromStorage('user')
const apiUrl = process.env.REACT_APP_API_URL
const request = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.access_token}`
  }
})

export const httpClientRequest = Object.freeze({
  get: async (URL, payload) => {
    try {
      const response = await request.get(`${URL}`, payload)
      return response.data
    } catch (error) {
      console.info(`Error on Get request: ${URL}, ${error}`)
    }
  },
  post: async (URL, payload) => {
    try {
      const response = await request.post(`${URL}`, payload)
      return response.data
    } catch (error) {
      console.info(`Error on POST request: ${URL}, ${error}`)
    }
  },
  delete: async (URL, payload) => {
    try {
      const response = await request.delete(`${URL}`)
      return response.data
    } catch (error) {
      console.info(`Error on Delete request: ${URL}, ${error}`)
    }
  }
})

export default httpClientRequest
