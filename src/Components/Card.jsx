import React from 'react'
import { Link } from 'react-router-dom';





function Card({event}) {

    const {id , eventName , eventTitle , eventImage} = event || {};
  return (
    <>
    <div className='border-[1px] shadow-sm bg-[#FFF] rounded-md'>
          <div>
            <img src={eventImage} alt=".." className='h-[240px] w-full' />
          </div>

          <div className='py-2 space-y-3'>
            
            <div>
            <h1 className='text-[#000] font-medium text-xl border-l-2 pl-2 border-[#E2564D]'>{eventName || 'wedding Events'}</h1>
            </div>

            <p className='pl-2 text-base font-normal text-[#54595F]'>{eventTitle || ''}</p>


            <Link to={`/Home/${id}`} style={{ transition: 'border 1.3s' }} className='py-2 inline-flex items-center gap-1 ml-2 px-3 border-[1px] hover:border-[1px] hover:border-[#54595F] rounded-md font-normal'>View Details <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i></Link>
          </div>

        </div>
    
    
    </>
  )
}

export default Card