import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { decryptFromStorage, encryptAndStore } from './SecureStorage'

const AuthenticateUser = () => {
  const navigate = useNavigate()
  const user = decryptFromStorage('user')

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (!user || user === 'undefined' || user == 'null') {
      navigate('/')
    }
  // eslint-disable-next-line eqeqeq
  }, [user])
}

export default AuthenticateUser
