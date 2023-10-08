import React from 'react';
import { Outlet } from 'react-router-dom'
import "../src/main.css"
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>

      <header className='min-h-screen text-[#FFF]'>
        <div className='overlay'></div>
        <Navbar />
        <br />
        <br />
        <br />
        <div className='relative z-10 px-[5%]'>

          <div className='w-[50%] space-y-6 float-right'>
            <h1 className='text-5xl font-bold '>
              Bangladesh Best Event <br />
              Management Agency !
            </h1>

            <p className='text-base font-normal'>It is an event management agency, who provides best event services and aims at customer happiness, best event management at reasonable prices, one of the best event management agencies in Bangladesh. </p>

            <button style={{ transition: 'background 1s' }} className='py-2 px-3 border-[1px] border-[#FFF] rounded-md hover:bg-[#FFF] hover:text-black font-medium'>Learn more</button>

          </div>
        </div>
      </header>
      <br />
      <br />
      <main className='px-[5%]'>
        <Outlet />
      </main>
      <br />
      <br />
      <footer>
        <Footer />
      </footer>



    </>
  )
}

export default App