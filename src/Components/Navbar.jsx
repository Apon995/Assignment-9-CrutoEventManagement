import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../ContextHooks/Provider';


function Navbar({ CurrentLocation }) {

  const [menu , setMenu ] = useState(false)

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

  const ToggleNav =()=>{
    setMenu(!menu)

    if(!menu){
      document.getElementById('navbar').classList.remove('top-[-285px]')
      document.getElementById('navbar').classList.add('top-[80px]')

      document.getElementById('loginBtn').classList.remove('top-[-80px]')
      document.getElementById('loginBtn').classList.add('top-[280px]')

    }
    else{
      document.getElementById('navbar').classList.add('top-[-285px]')
      document.getElementById('navbar').classList.remove('top-[80px]')

      document.getElementById('loginBtn').classList.add('top-[-80px]')
      document.getElementById('loginBtn').classList.remove('top-[280px]')

    }

   

  }

  return (
    <>
      <nav className='flex items-baseline justify-between py-5 px-[5%] relative z-10 '>
        <div>
          <h1 className='pb-4 font-semibold text-3xl'>Cruto</h1>
        </div>
        <div className='md:hidden block text-2xl text-white' style={{color:`${CurrentLocation == 'Login' || CurrentLocation == 'Register' ? 'black' : 'white'}`}}>
          <button onClick={ToggleNav}>{menu ?  <i className="fa-solid fa-xmark"></i>   :  <i className="fa-solid fa-bars"></i>}</button>

        </div>
        {/* ---navlinks-- */}
        <div style={{color : `${ CurrentLocation == '' || CurrentLocation == 'About' || CurrentLocation == 'Contact' || CurrentLocation =='purchase' || CurrentLocation == 'profile' || CurrentLocation == 'Login' || CurrentLocation == 'Register' ? 'black' : 'white'}`}} id='navbar' className='absolute md:static top-[-285px] left-0 duration-700 bg-white font-semibold shadow-xl rounded-md md:w-fit w-full h-[255px] md:h-0 py-2 md:py-0 z-10'>
          <ul className='flex items-center gap-3 md:flex-row flex-col z-10 md:z-0 ' id='NavLink'>
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
        <div id='loginBtn' className='absolute md:static top-[-80px] duration-700 left-[85px] z-10'>

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