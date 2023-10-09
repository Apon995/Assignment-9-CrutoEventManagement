import React from 'react';
import AboutPic from '../assets/About-us.avif';
import signature from '../assets/signature.png'

function About() {
  return (
    <>
      <div className='min-h-screen px-[5%]'>
        <div className='flex items-center justify-between gap-3'>
          <div className='w-[50%]'>

            <img src={AboutPic} alt=".." />

          </div>
          <div className='w-[50%] text-center space-y-7'>
            <h1 className='text-4xl font-semibold text-[#000]'>
              Managing Corporate Event <br />
              For More Than 25 Years
            </h1>

            <p className='text-base font-normal text-[#54595F] w-[480px] mx-auto'>Cruto Events was born from a shared dream among a group of event enthusiasts who saw the potential to redefine the art of event management. Established in 2023, we embarked on a journey to curate exceptional events that not only meet but exceed your expectations.
              At Cruto Events, our mission is simple: to turn your ideas into extraordinary experiences. We are driven by the belief that every event, big or small, deserves the touch of brilliance and meticulous planning. We strive to make your vision come to life, ensuring that every detail is perfect, every moment is memorable, and every guest is captivated.

              Our Expertise
            </p>


            <div className='flex items-center text-start gap-3 ml-2'>
              <img src={signature} alt="" />
              <h2 className='font-medium text-base text-black'>
                Muhammad sahal <br />
                Founder and CEO cruto.com
              </h2>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default About