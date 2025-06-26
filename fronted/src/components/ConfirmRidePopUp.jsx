import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
   const [otp,setOtp]=useState('') 
    const navigate = useNavigate()
   const submitHandler=async (e)=>{
      e.preventDefault()

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }

   }
  return (
   <div className='h-screen'>
         <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
           props.setConfirmRidePopupPanel(false)
        }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>  
         <h3 className='text-2xl font-semibold mb-5 '>New Ride for you!</h3>
         <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 mt-4 '>
                <img className='h-12 rounded-full object-cover w-10' src='https://wallpapers.com/images/hd/random-person-with-book-png-06252024-c7za8tct21lw11kt.png' alt=''/>
                <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
         </div>
           
         <div className='flex gap-2 justify-between flex-col items-center'>
           
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                   <i className=" ri-map-pin-user-line"></i> 
                   <div>
                    <h3 className='text-lg font-medium'>562/11A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                   </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                   <i className="text-lg  ri-map-pin-2-fill"></i> 
                   <div>
                    <h3 className='text-lg font-medium'>562/11A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                   </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                   <i className=" ri-currency-line"></i> 
                   <div>
                    <h3 className='text-lg font-medium'>${props.ride?.fare}</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                   </div>
                </div>

            </div>
            
            <div className='mt-6 w-full'>
               <form onSubmit={submitHandler}>
                  
               
                    <input value={otp} onChange={(e)=>StylePropertyMap(e.target.value)} type='text' className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 ' placeholder='Enter OTP'/>
               <button to='/captain-riding' onClick={()=>{
                
            }} className='w-full mt-5 text-lg flex justify-center bg-green-500 text-white font-semibold p-3 rounded-lg'>Accept</button>
            <button onClick={()=>{
                
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }} className='w-full mt-1 bg-gray-300 text-lg text-gray-700 font-semibold p-3 rounded-lg'>Cancel </button>
               </form>
            </div>
         </div>
    </div>
  )
}

export default ConfirmRidePopUp