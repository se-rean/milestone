import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:8009/milestone/api/v1',
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
  }
})

export const httpClientRequest = Object.freeze({
  get: async (URL, payload) => {
    try {
      const response = await request.get(`${URL}`, payload)
      console.log(URL)
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
