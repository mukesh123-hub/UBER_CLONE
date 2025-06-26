import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
           props.setRidePopupPanel(true)
        }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>  
         <h3 className='text-2xl font-semibold mb-5 '>New Ride for you!</h3>
         <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3 mt-4 '>
                <img className='h-12 rounded-full object-cover w-10' src='https://wallpapers.com/images/hd/random-person-with-book-png-06252024-c7za8tct21lw11kt.png' alt=''/>
                <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
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
            <div className='flex w-full  items-center justify-between'>
               <button onClick={()=>{
                props.setConfirmRidePopupPanel(true)
                
                props.confirmRide()
            }} className=' mt-5 bg-green-500 text-white font-semibold p-3 px-8 rounded-lg'>Confirm</button>
            <button onClick={()=>{
                
                props.setRidePopupPanel(false)
            }} className=' mt-5 bg-gray-300 text-gray-700 font-semibold p-3 px-8 rounded-lg'>Ignore</button>
            </div>
         </div>
    </div>
  )
 }

export default RidePopUp