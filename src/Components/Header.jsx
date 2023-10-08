import React from 'react'
import { NavLink ,Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='flex items-center justify-between py-5 px-[5%] '>
        <div>
          <h1>Cruto</h1>
        </div>
        <div>
          <ul className='flex items-center gap-3'>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/About' >About us</NavLink></li>
            <li><NavLink to='/Contact' >Contact us</NavLink></li>
            <li><NavLink to='/purchase' >purchase Events</NavLink></li>
            <li><NavLink to='/profile' >profile</NavLink></li>
          </ul>
        </div>
        <div>
        

          <Link to='/Login'>Login</Link>

        </div>

      </nav>




    </>
  )
}

export default Header