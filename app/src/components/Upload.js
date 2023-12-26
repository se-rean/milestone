/* eslint-disable react/display-name */
// FileUploadComponent.jsx
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import axios from 'axios'

const FileUploadComponent = forwardRef((_props, ref) => {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    // Update the state when a file is selected

    const selectedFile = event.target.files[0]

    if (selectedFile) {
      const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

      if (allowedFileTypes.includes(selectedFile.type)) {
        console.log('File is allowed:', selectedFile)
        setFile(selectedFile)
      } else {
        // File type is not allowed
        alert('Please select a valid file type (PDF or DOCX)')
        // Optionally, clear the file input value to prevent submitting the wrong file
        event.target.value = null
      }
    }
  }

  const handleSaveClick = async () => {
    console.log(file)
    if (file) {
      const data = new FormData()
      data.append('file', file)

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8009/milestone/api/v1/file/upload', // Replace with your actual upload URL
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data
      }

      try {
        const response = await axios.request(config)
        console.log(JSON.stringify(response.data))
        return response.data
      } catch (error) {
        console.log(error)
        // Handle the error as needed
      }
    } else {
      console.log('Please select a file before clicking save.')
    }
  }

  // Expose the function to the parent component using useImperativeHandle
  useImperativeHandle(ref, () => ({
    handleSaveClick
  }))

  return (
    <div className='mt-5 flex-col gap-1 flex'>
      {/* Input for file selection */}
      <label>Upload File:</label>
      <input type="file" className='bg-yellow-200' onChange={handleFileChange} />
      {/* Button to trigger file upload */}
      {/* <button onClick={handleSaveClick}>Save</button> */}
    </div>
  )
})

export default FileUploadComponent
