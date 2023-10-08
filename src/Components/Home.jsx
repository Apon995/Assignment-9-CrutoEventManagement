import React from 'react';
import teamImg from '../assets/teamImg-1.jpg'
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
import work1 from '../assets/event-work-1.jpg'
import work2 from '../assets/event-work-2.jpg'
import work3 from '../assets/event-work-3.jpg'
import work4 from '../assets/header-img-1.jpg'


function Home() {
  const data = useLoaderData();

  console.log(data)


  return (
    <>
      {/* --who-we-are-section-- */}
      <div className='flex gap-5'>
        <div className='w-[50%]'>
          <h1 className='text-base font-medium text-red-500'>Who we are ?</h1>

          <div className='py-5 space-y-4'>
            <h2 className='text-4xl font-semibold text-[#000]'>We Help Corporate to<br />
              Manage Event !</h2>
            <p className='text-base font-normal text-[#54595F]'> Cruto is a largest event management agency, We specialize in creating exceptional social events tailored to your style and vision. Our experienced team meticulously plans and executes weddings, birthdays, and more, ensuring every detail is perfect. Let us turn your dreams into reality - contact Cruto today for an unforgettable and enjoyble event experience </p>
          </div>

          <div className='flex '>
            <div style={{ transition: 'background 1s' }} className='hover:shadow-lg  hover:cursor-pointer  border-[2px] flex items-center justify-center flex-col px-8 py-3 bg-[#1a1a1a14] text-xl text-[#54595F] font-medium'>
              <h1>2023 </h1>
              <p>Established</p>
            </div>
            <div style={{ transition: 'background 1s' }} className='hover:shadow-lg hover:cursor-pointer  border-[2px] flex items-center justify-center flex-col px-8 py-3 bg-[#1a1a1a14] text-xl text-[#54595F] font-medium'>
              <h1> 100+ </h1>
              <p>Employe</p>

            </div>

          </div>

        </div>
        <div className='w-[50%]'>
          <img src={teamImg} alt="" />

        </div>

      </div>

      <br />
      <br />
      <br />
       {/* ---Features-works-- */}
       <div>
        <h1 className='text-base font-medium text-red-500'>Events we done</h1>
        <h2 className='text-4xl font-semibold text-[#000] pt-4'>Featured Works</h2>
        <br />
       
        <div className='grid md:grid-cols-2 grid-cols-1  '>

          {/* --work-card-one */}

          <div className='border-[1px] bg-[#FFF]'>
            <div className='work'>
              <img src={work1} alt=".." className='h-[280px] w-full' />
            <div className='OnHoverOverly'></div>
            </div>

            <div className='py-2 '>
              <h1 className='text-[#000] font-medium text-xl border-l-2 pl-2 border-[#E2564D]'>Hexatron Factory Open Day</h1>


            </div>

          </div>
          {/* --work-card-two */}

          <div className='border-[1px] shadow-sm bg-[#FFF] rounded-md'>
            <div className='work'>
              <img src={work2} alt=".." className='h-[280px] w-full' />
            <div className='OnHoverOverly'></div>
            </div>

            <div className='py-2 '>
              <h1 className='text-[#000] font-medium text-xl border-l-2 pl-2 border-[#E2564D]'>Eroforce Global Product Launch</h1>


            </div>

          </div>
          {/* --work-card-three */}

          <div className='border-[1px] shadow-sm bg-[#FFF] rounded-md'>
            <div className='work'>
              <img src={work3} alt=".." className='h-[280px] w-full' />
            <div className='OnHoverOverly'></div>
            </div>

            <div className='py-2 '>
              <h1 className='text-[#000] font-medium text-xl border-l-2 pl-2 border-[#E2564D]'>Mid Generation company picnic</h1>


            </div>

          </div>
          {/* --work-card-four */}

          <div className='border-[1px] shadow-sm bg-[#FFF] rounded-md'>
            <div className='work'>
              <img src={work4} alt=".." className='h-[280px] w-full' />
            <div className='OnHoverOverly'></div>
            </div>

            <div className='py-2 '>
              <h1 className='text-[#000] font-medium text-xl border-l-2 pl-2 border-[#E2564D]'>Party center event</h1>


            </div>

          </div>
          </div>






      </div>

      <br />
      <br />
      <br />
       {/* ---our-services-section-- */}
       <div>
        <h1 className='text-base font-medium text-red-500 text-center'>Our services</h1>
        <div className='text-center space-y-2'>
          <h2 className='text-4xl font-semibold text-[#000]'>Cruto Event Management services</h2>
          <p className='text-base font-normal text-[#54595F]'>our services is very fast and safe , you must take our service cause we give the best service</p>

          <button style={{ transition: 'border 1.3s' }} className='py-2 px-3 border-[1px] hover:border-[1px] hover:border-[#54595F] rounded-md font-normal'>View All services</button>
        </div>

        <br />
        <br />
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {
            data?.map(event => <Card event={event} key={event.id} />)
          }


        </div>


      </div>
     








    </>
  )
}

export default Home