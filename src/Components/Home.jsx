import React from 'react';
import teamImg from '../assets/teamImg-1.jpg'
import Card from './Card';
import { useLoaderData } from 'react-router-dom';
import JankarMahbub from '../assets/jankar-mahbub.png'
import sumitSaha from '../assets/sumit-saha.jpg'
import Ayman from '../assets/ayman-sadiq.jpg'
import Farhan from '../assets/Khalid-farhan.jpg'
import work1 from '../assets/event-work-1.jpg'
import work2 from '../assets/event-work-2.jpg'
import work3 from '../assets/event-work-3.jpg'
import work4 from '../assets/header-img-1.jpg';


function Home() {
  const data = useLoaderData();




  return (
    <div className='md:block hidden'>
      <section className='px-[5%] '>
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
        <br />
        <br />
        <br />
        <br />
        {/* ---our-client-says-section-- */}
        <div>
          <h1 className='text-base font-medium text-red-500 text-center'>Our clients</h1>
          <div className='text-center space-y-2'>
            <h2 className='text-4xl font-semibold text-[#000]'>What Our Client Say</h2>
            <p className='text-base font-normal text-[#54595F]'>Alhumdulliahh , our client satisfied to our services and they give good feedbacks !</p>


          </div>

          <br />
          <br />
          
          <div className='grid  md:grid-cols-2 grid-cols-1 '>
            {/* ---client-one-- */}
            <div className='flex border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md '>
              <div className='w-full my-auto'>
                <img src={JankarMahbub} alt=".." className='w-full h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#54595F]'>
                  "I stumbled upon Cruto.com while searching for event planning websites, and it turned out to be a hidden gem! The user-friendly interface and extensive event listings made organizing our family reunion a breeze. Thank you, Cruto, for making our event memorable!"
                </h1>
                <p className='text-sm font-semibold text-black'>Jankar Mahbub</p>
              </div>

            </div>
            {/* ---client-two-- */}
            <div className='flex border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={sumitSaha} alt=".." className='w-full h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#54595F]'>
                  "Cruto.com exceeded my expectations! I was able to find the perfect venue for my daughter's sweet 16 party in just a few clicks. The event planning tools and vendor recommendations were incredibly helpful. I highly recommend Cruto to anyone planning an event!"
                </h1>
                <p className='text-sm font-semibold text-black'>sumit saha</p>
              </div>

            </div>
            {/* ---client-three-- */}
            <div className='flex border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={Ayman} alt=".." className='w-full h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#54595F]'>
                  "As a professional event planner, I rely on Cruto.com for finding unique venues and event services. The website's comprehensive directory and detailed vendor profiles save me hours of research. Cruto has become an indispensable tool in my business."
                </h1>
                <p className='text-sm font-semibold text-black'>Ayman Sadik </p>
              </div>

            </div>
            {/* ---client-four-- */}
            <div className='flex border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
              <div className='w-full my-auto'>
                <img src={Farhan} alt=".." className='w-full h-[150px] my-auto' />
              </div>
              <div className='py-2 px-2 space-y-3'>
                <h1 className='text-base font-normal text-[#54595F]'>
                  "I recently used Cruto.com to plan my company's annual gala, and I couldn't be happier with the results. The website's event promotion features helped us reach a wider audience, and the RSVP management tools made guest list management a breeze. Cruto is a game-changer for event organizers!"
                </h1>
                <p className='text-sm font-semibold text-black'>Khalid Farhan </p>
              </div>

            </div>


          </div>


        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      {/* ---makes-your-event-memorable-section-- */}
      <div className="min-h-[500px] w-full" id='memorableSection'>
        <div className="text-center pt-9">
          <h1 className='text-5xl font-bold text-[#FFFF]'>Let's Make Your <br /> Event Memorable!</h1>

          <div className='mt-8 w-[35%] border-[1px] mx-auto h-[50px] rounded-md flex items-center '>
            <input type="text" placeholder='Write your feedback here ' className='w-[80%] h-full px-2 outline-none border-none text-black text-base font-semibold ' />
            <button className='w-[20%] h-full text-black text-xl hover:text-white font-medium cursor-pointer'>Send</button>
          </div>
          <div className='mt-9'>
            <h1 className='text-2xl font-bold text-[#FFFF]'>Thank you for visit our site !</h1>
          </div>
        </div>




      </div>









    </div>
  )
}

export default Home