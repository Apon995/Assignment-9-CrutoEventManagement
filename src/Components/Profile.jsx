import React, { useContext , useState , useEffect} from 'react';
import { AuthContext } from '../ContextHooks/Provider';


function Profile() {
  const [photo , setPhoto] = useState(null)
  const { user } = useContext(AuthContext)


 useEffect(()=>{

  setPhoto(user?.photoURL)

 },[user])

  return (
    <>
      <div className='min-h-screen  lg:flex items-center px-[3%] '>

        <div className='xl:w-[40%] lg:w-[45%] md:w-[50%] w-fit h-fit border-[2px] rounded-lg bg-white shadow-xl mx-auto py-4'>
          <div>
            <div className='md:w-[250px] w-[80%] mx-auto h-[200px] rounded-[20%] border-2'>
              {
                photo ? <img src={photo} alt="" className='w-[250px] mx-auto h-[200px] rounded-[20%] ' /> : ""

              }

            </div>
          </div>
           <br />
          <div className='mt-4 px-6'>
            <h1 className='text-3xl font-semibold text-[#ec2d2d]'>My profile</h1>
            <br />
            <br />
            <div className='space-y-5'>
              <div className='border-b-[1px] border-[#adadad] pb-2'>
                <h1 className='text-xl font-semibold text-[#000] md:inline-flex items-center gap-3'>Name :  <p className='lg:text-xl text-base font-medium text-[#54595F]'>{user?.displayName || 'name not defined'}</p> </h1>
              </div>
              <div className='border-b-[1px] border-[#adadad] pb-2'>
                <h1 className='text-xl font-semibold text-[#000] md:inline-flex items-center gap-3'>Email : <p className='lg:text-xl text-base font-medium text-[#54595F]'>{user?.email || 'Example@gmail.com'}</p> </h1>
              </div>
              <div className='border-b-[1px] border-[#adadad] pb-2'>
                <h1 className='text-xl font-semibold text-[#000] md:inline-flex items-center gap-3'>Provider Id : <p className='lg:text-xl text-base font-medium text-[#54595F]'>{user?.providerId}</p></h1>
              </div>
            </div>
          </div>
          <br />
          <div className='text-center'>
            <button style={{ transition: 'background 1s' }} className='px-4 py-2 hover:bg-black rounded-md hover:text-white text-black border-2 font-medium cursor-pointer'>see more</button>
          </div>


        </div>

      </div>
      <br />





    </>
  )
}

export default Profile