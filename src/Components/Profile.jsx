import React from 'react';
// import user from '../assets/user-profile.png'

function Profile() {
  return (
    <>
      <div className='min-h-screen w-full flex item-center'>

        <div className='w-[40%] h-[550px] border-[2px] rounded-lg bg-white shadow-xl mx-auto py-2'>
          <div>
            <div className='w-[250px] mx-auto h-[200px] rounded-[20%] border-2'>
              
               </div>
          </div>

          <div className='mt-4 px-6'>
            <h1 className='text-3xl font-semibold text-[#ec2d2d]'>My profile</h1>
            <br />
            <br />
            <div className='space-y-5'>
              <div className='border-b-[1px] border-[#adadad] pb-2'>
                <h1  className='text-xl font-semibold text-[#000] inline-flex items-center gap-3'>Name :  <p className='text-xl font-medium text-[#54595F]'></p> </h1>
              </div>
              <div  className='border-b-[1px] border-[#adadad] pb-2'>
                <h1 className='text-xl font-semibold text-[#000] inline-flex items-center gap-3'>Email : <p className='text-xl font-medium text-[#54595F]'></p> </h1>
              </div>
              <div  className='border-b-[1px] border-[#adadad] pb-2'>
                <h1 className='text-xl font-semibold text-[#000] inline-flex items-center gap-3'>Number : <p className='text-xl font-medium text-[#54595F]'></p></h1>
              </div>
            </div>
          </div>
           <br />
         <div className='text-center'>
         <button style={{ transition: 'background 1s' }}  className='px-4 py-2 hover:bg-black rounded-md hover:text-white text-black border-2 font-medium cursor-pointer'>see more</button>
         </div>
         

        </div>

      </div>





    </>
  )
}

export default Profile