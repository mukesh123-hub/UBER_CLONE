import React,{useContext} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);
   if (!captain || !captain.fullname) {
    return <p>Loading...</p>; // or return null;
  }
  return (
    <div>
         <div className='flex items-center justify-between '>
              <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src='https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1f06e624-ee62-4695-b659-00a4d8fd370f/width=1200/1f06e624-ee62-4695-b659-00a4d8fd370f.jpeg' alt=''/>
                <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname+" "+captain.fullname.lastname}</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold'>$150.10</h4>
                <p className='text-sm text-gray-600'>Earned</p>
              </div>
             </div> 
             <div className=' flex p-3 mt-6 bg-gray-50 rounded-xl justify-center gap-5 items-start'> 
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div> 
                <div className='text-center'> 
                    <i className='text-3xl mb-2 font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                     <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                     <p className='text-sm text-gray-600'>Hours Online</p>
               
                </div>
             </div>  
    </div>
  )
}

export default CaptainDetails