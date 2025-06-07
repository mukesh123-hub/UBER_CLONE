import  React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        if (!token) {
            setIsLoading(false); // <-- Add this line
            navigate('/login')
            return; // <-- Add this line
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setUser(response.data)
            }
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            setIsLoading(false) // <-- Add this line
            navigate('/login')
        })
    }, [ token, setUser, navigate ])

    

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper