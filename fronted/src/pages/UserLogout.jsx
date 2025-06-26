import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        localStorage.removeItem('token')
        navigate('/login')
      } catch (err) {
        console.error(err)
      }
    }

    logoutUser()
  }, [navigate, token])

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout