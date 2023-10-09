import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import "../src/main.css"
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  const location = useLocation();

  const [bgimage, setbgimage] = useState("url('../src/assets/header-img-1.jpg')")
  const [bgHeight, setBgheight] = useState('610px');
  const [bgPosition, setbgPositon] = useState('none');



  switch (location.pathname) {
    case '/':
      useEffect(() => {
        setbgimage("url('../src/assets/header-img-1.jpg')")
        setBgheight('600px')
        setbgPositon('top left')



      }, [location.pathname])

      break;


    case '/About':

      useEffect(() => {
        setbgimage("url('../src/assets/teamImg-1.jpg')")
        setBgheight('350px')
        setbgPositon('bottom center')


      }, [location.pathname])

      break;


    case '/Contact':
      useEffect(() => {
        setbgimage("url('../src/assets/contact-us.jpg')")
        setBgheight('350px')
        setbgPositon('center')

      }, [location.pathname])


      break;

    case '/purchase':
      useEffect(() => {
        setbgimage("url('../src/assets/purchase-img.jpg')")
        setBgheight('350px')
        setbgPositon('bottom center')

      }, [location.pathname])



      break;

    case '/profile':
      useEffect(() => {
        setbgimage("url('')")
        setBgheight('350px')
        setbgPositon('bottom center')
      }, [location.pathname])


      break;
  }


  return (
    <>

      <header className='text-[#FFF] bg-cover bg-no-repeat' id='headerTag' style={{
        backgroundColor: 'inherit',
        background: bgimage,
        backgroundPosition: bgPosition,
        backgroundRepeat: 'no-repeat',
        minHeight: bgHeight,
      }} >
        <div className='overlay' id='overlay' style={{ minHeight: bgHeight }}></div>
        <Navbar />
        <br />
        <br />
        <br />
        {
          location?.pathname == '/' ?
            <div className='relative z-10 px-[5%]'>

              <div className='w-[50%] space-y-6 float-right'>
                <h1 className='text-5xl font-bold '>
                  Bangladesh Best Event <br />
                  Management Agency !
                </h1>

                <p className='text-base font-normal'>It is an event management agency, who provides best event services and aims at customer happiness, best event management at reasonable prices, one of the best event management agencies in Bangladesh. </p>

                <button style={{ transition: 'background 1s' }} className='py-2 px-3 border-[1px] border-[#FFF] rounded-md hover:bg-[#FFF] hover:text-black font-medium'>Learn more</button>

              </div>
            </div> : <div className='flex items-center justify-center relative z-10 '>
              <h1 className='text-3xl font-bold'>{location.pathname.replace('/', '')}</h1>
            </div>
        }
      </header>
      <br />
      <br />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>



    </>
  )
}

export default App