import React from 'react'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault();
    const userData={
      email: email,
      password: password
    }
    
    setEmail('');
    setPassword('');

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate('/home');
    }
  }  
  return (
    <div className='p-7 flex flex-col justify-between  '>
        <div>
           <img className='w-16 mb-10' src='https://logospng.org/download/uber/logo-uber-4096.png'/>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input required value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} className='bg-[#eeeeee] mb-7 nded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder="Enter your email" />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input required value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}className='bg-[#eeeeee] mb-7 nded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder="Enter your password" />
            <button className='bg-[#111] text-white font-semibold mb-7 nded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button> 
           
         </form>
          <p className='text-center'> New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
          <Link
            to='/captain-login'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as Captain</Link>
        </div>
    </div>
  )
}
 
export default UserLogin