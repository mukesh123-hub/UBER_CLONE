import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)

    const locations=[
        "24B,Near Kapoor's cafe,Coding School,Bhopal",
        "24C,Near Malhotra's cafe,Coding School,Bhopal",
        "22B,Near Choudhary's cafe,Coding School,Bhopal",
        "23B,Near Sharma's cafe,Coding School,Bhopal"

    ]
  return (
    <div>
        {
            locations.map(function(elem,idx){
                return   <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4  border-2 p-3 border-white active:border-black rounded-xl items-center my-4  justify-start'>
                <h2 className='bg-[#eee] h-6 w-8 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium '>{elem}</h4>
            </div>
            })
        }
    </div>
  )
 }

export default LocationSearchPanel