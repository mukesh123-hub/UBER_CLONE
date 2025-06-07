import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {
  const navigate = useNavigate();

  const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    


    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const {captain,setCaptain} = React.useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity), // Convert to number!
        vehicleType: vehicleType
      }
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');
    } catch (err) {
      alert(
        err.response?.data?.message ||
        (err.response?.data?.errors && err.response.data.errors[0]?.msg) ||
        'Registration failed'
      );
    }
  }
  return (
   <div className='py-5 px-h-screen flex flex-col justify-between  '>
        <div>
           <img className='w-16 mb-10' src='https://logospng.org/download/uber/logo-uber-4096.png'/>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>

             <h3 className='text-base font-medium mb-2'>What's your name</h3>
             <div className='flex gap-4 mb-5'> 
              <input required 
             className='bg-[#eeeeee]  w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm' type="text" placeholder="First name" value={firstName} onChange={(e)=>{
                setFirstName(e.target.value)
             }}/>
             <input required 
             className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm' type="text" placeholder="Last name" value={lastName} onChange={(e)=>{
                setLastName(e.target.value)
             }}/>
             </div>
            <h3 className='text-base font-medium mb-2'>What's your email</h3>
            <input required value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }}   
             className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder="Enter your email" />
            <h3 className='text-base font-medium mb-2'>Enter Password</h3>
            <input required value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder="Enter your password" />
            <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-5'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className='flex gap-4 mb-5'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="number"
                min="1"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                required
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
            <button className='bg-[#111] text-white font-semibold mb-7 nded px-4 py-2  w-full text-lg placeholder:text-base'>Create Captain Account</button> 
            
         </form>
         <p className='text-center'> Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div> 
          <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Term of Service apply</span>.</p>
        </div>
    </div>
  )
}

export default CaptainSignup