import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../ContextHooks/Provider';


function Navbar({ CurrentLocation }) {

  const { user, Logout } = useContext(AuthContext)


  const LogoutUser = () => {

    Logout()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }
  console.log(CurrentLocation)

  return (
    <>
      <nav className='flex items-center justify-between py-5 px-[5%] relative z-10 '>
        <div>
          <h1 className='pb-4 font-semibold text-3xl'>Cruto</h1>
        </div>
        <div>
          <ul className='flex items-center gap-3 ' id='NavLink'>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/About' >About us</NavLink></li>
            <li><NavLink to='/Contact' >Contact us</NavLink></li>
            {
              user ? <>
                <li><NavLink to='/purchase' >purchase Events</NavLink></li>
                <li><NavLink to='/profile' >profile</NavLink></li>

              </> : ''
            }
          </ul>
        </div>
        <div>

          {
            user ? <div className='inline-flex gap-3 items-center'>
              <i className="fa-solid fa-right-from-bracket"></i>
              <button onClick={LogoutUser} style={{ transition: 'background 1s' }} className='bg-[#FFF] px-4 hover:bg-black hover:text-[#FFF] py-2 rounded-md text-black font-medium cursor-pointer'>Log out</button>
            </div> :


              <div className='inline-flex gap-3 items-center'>
                <i className="fa-solid fa-right-to-bracket text-xl"></i>
                {
                
                  CurrentLocation == 'Login' || CurrentLocation == 'Register' ?
                    <Link style={{ transition: 'background 1s' }} to='/Login' className='bg-black px-4 border-[1px] hover:bg-white hover:shadow-lg hover:text-black py-2 rounded-md text-white font-medium cursor-pointer'>Log in</Link> :


                    <Link style={{ transition: 'background 1s' }} to='/Login' className='bg-[#FFF]  px-4 hover:bg-black hover:text-[#FFF] py-2 rounded-md text-black font-medium cursor-pointer'>Log in</Link>
                }

              </div>
          }



        </div>

      </nav>




    </>
  )
}
Navbar.propTypes = {
  CurrentLocation: PropTypes.string
}
export default Navbar