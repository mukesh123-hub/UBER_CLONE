import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Captainlogin = () => {
  const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email: email,
        password: password
      });
      
      setEmail('');
      setPassword('');
    }  
  return (
     <div className='p-7 flex flex-col justify-between  '>
        <div>
           <img className='w-16 mb-2' src='https://th.bing.com/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?rs=1&pid=ImgDetMain'/>
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
            <p className='text-center'> Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
         </form>
        </div>
        <div>
          <Link
            to='/login'
            className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as User</Link>
        </div>
    </div>
  )
}

export default Captainlogin