import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='w-full px-[5%] bg-[#111111] text-[#FFF] py-9 footer md:text-start text-center ' >
        <div className=' flex md:flex-row flex-col items-center justify-between py-9'>
          {/* --footer-1st-col-- */}
          <div>
            <h1 className='pb-4 font-semibold text-3xl'>Cruto</h1>
            <div>
              <p className='text-sm font-medium'>Our company is the best event manager,<br />
                our company is 2nd largest event manager<br />
                in the city, we try to our best for customers.</p>
            </div>

            <div className='flex items-center gap-4 pt-4 socialIcons md:justify-start justify-center'>
              <div>
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div>
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          {/* --footer-2nd-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Quick Links</h1>
            <div>
              <ul className=' text-sm font-medium space-y-1' id='quickUl'>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/About' >About us</Link></li>
                <li><Link to='/Contact' >Contact us</Link></li>
                <li><Link to='/purchase' >purchase Events</Link></li>
                <li><Link to='/profile' >profile</Link></li>
              </ul>
            </div>
          </div>

          {/* --foter-3rd-col-- */}
          <div className='lg:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Our Services</h1>

            <ul className='text-sm font-medium space-y-1' id='serviceUl'>
              <li><Link to='/'>Full-time service production</Link></li>
              <li><Link to='/'>Birthday Management</Link> </li>
              <li><Link to='/'>Anniversary Management</Link></li>
              <li><Link to='/'>Wedding Management</Link></li>
              <li><Link to='/'>Family Dinner Management</Link></li>

            </ul>
          </div>

          {/* --footer-4th-col-- */}
          <div className='md:block hidden'>
            <h1 className='pb-4 font-semibold text-2xl'>Contact info </h1>

            <div>
              <ul className='text-sm font-medium space-y-1'>
                <li>celenden park , Mirpur city 2005</li>
                <li>Allah karim square in Bangladesh.</li>
                <li>Hotline : +9990003</li>
                <li>curto2023@gmail.com</li>

              </ul>
            </div>
          </div>
        </div>


        <div>
          <p>Copyright &copy; 2023 cruto Event Management Company</p>

        </div>



      </div>


    </>
  )
}

export default Footer