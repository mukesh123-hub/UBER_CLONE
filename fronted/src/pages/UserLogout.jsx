import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const token= localStorage.getItem('token')
  const navigate = useNavigate()

  axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    localStorage.removeItem('token')
    navigate('/login')
  }).catch((err) => {
    console.error(err)
  })
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout