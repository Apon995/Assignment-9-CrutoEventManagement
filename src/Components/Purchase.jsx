import React from 'react'

function Purchase() {
  return (
   <>
   <div className='min-h-screen px-[5%] '>
        <div className='flex gap-5 md:flex-row flex-col-reverse'>
          <div className='md:w-[75%]  w-full border-[1px] rounded-md border-[#adadad]  bg-[#FFF] shadow-lg'>
            <div className='px-4 py-4'>
              <h1 className='text-black font-semibold text-xl'>Your Cart </h1>
              <br />
              <br />
              <div>
                expample events
              </div>
            </div>


          </div>
          <div className='md:w-[35%] w-full border-[1px] rounded-md  border-[#adadad] h-fit bg-[#FFF] shadow-lg'>

            <div className='px-5 py-4 space-y-5'>
              <p className='text-[#000] lg:text-xl text-base font-normal'>Total purchase Events : </p>

              <button style={{ transition: 'background 1s' }}  className='w-full py-2 hover:bg-black rounded-md hover:text-white text-black border-2 font-medium cursor-pointer'>check Events</button>
            </div>

          </div>
        </div>

      </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Purchase