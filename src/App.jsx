import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import "../src/main.css"

function App() {
  const location = useLocation();
  const Navigation = useNavigation();


  const [bgimage, setbgimage] = useState("url('https://i.ibb.co/mvw2ncg/header-img-1.jpg')")
  const [bgHeight, setBgheight] = useState('610px');
  const [bgPosition, setbgPositon] = useState('none');

  const [CurrentLocation, SetCurrentLocation] = useState(null);




  useEffect(() => {
    if (location.state == null) {
      SetCurrentLocation(location.pathname.replace('/', ''))
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('headerTag').style.color = 'white'
      setbgimage("url('')")
      setBgheight('350px')
      setbgPositon('bottom center')

    }
    else{
      return
    }

  }, [location.state])

  switch (location.pathname) {
    case '/':
      useEffect(() => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('https://i.ibb.co/mvw2ncg/header-img-1.jpg')")
        setBgheight('600px')
        setbgPositon('top left')



      }, [location.pathname])

      break;


    case '/About':

      useEffect(() => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('https://i.ibb.co/F5j09zJ/team-Img-1.jpg')")
        setBgheight('350px')
        setbgPositon('bottom center')


      }, [location.pathname])

      break;


    case '/Contact':
      useEffect(() => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('https://i.ibb.co/x27Sy32/contact-us.jpg')")
        setBgheight('350px')
        setbgPositon('center')

      }, [location.pathname])


      break;

    case '/purchase':
      useEffect(() => {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('https://i.ibb.co/Lx3XMLg/purchase-img.jpg')")
        setBgheight('350px')
        setbgPositon('bottom center')

      }, [location.pathname])



      break;

    case '/profile':
      useEffect(() => {
        SetCurrentLocation(location.pathname.replace('/', ''))
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('headerTag').style.color = 'white'
        setbgimage("url('')")
        setBgheight('350px')
        setbgPositon('bottom center')
      }, [location.pathname])


      break;

    case '/Home/1':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;

    case '/Home/2':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;

    case '/Home/3':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;


    case '/Home/4':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;

    case '/Home/5':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;
    case '/Home/6':
      useEffect(() => {
        document.getElementById('headerTag').style.color = 'white'
        SetCurrentLocation(location.pathname.replace('/', ''))
        setbgimage("url('')")
        setBgheight('300px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;

    case '/Login':
      useEffect(() => {
        SetCurrentLocation(location.pathname.replace('/', ''))
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('headerTag').style.color = 'inherit'

        setbgimage("url('')")
        setBgheight('50px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;

    case '/Register':
      useEffect(() => {
        SetCurrentLocation(location.pathname.replace('/', ''))
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('headerTag').style.color = 'inherit'

        setbgimage("url('')")
        setBgheight('50px')
        setbgPositon('bottom center')
      }, [location.pathname])
      break;


  }




  return (
    <>

      <header className='text-[#FFF] bg-cover bg-no-repeat ' id='headerTag' style={{
        backgroundColor: 'inherit',
        background: bgimage,
        backgroundPosition: bgPosition,
        minHeight: bgHeight,
      }} >
        <div className='overlay md:block hidden' id='overlay' style={{ minHeight: bgHeight }}></div>
        <Navbar CurrentLocation={CurrentLocation} />
        <br />
        {
          location?.pathname == '/' ?
            <div className='relative md:z-10 z-[5]  px-[5%]'>

              <div className='lg:w-[50%] space-y-6 float-right lg:text-start text-center'>
                <h1 className='xl:text-5xl md:text-4xl  text-3xl font-bold lg:text-start text-center'>
                  Bangladesh Best Event <br className='md:block hidden' />
                  Management Agency !
                </h1>

                <p className='text-base font-normal'>It is an event management agency, who provides best event services and aims at customer happiness, best event management at reasonable prices, one of the best event management agencies in Bangladesh. </p>

                <button style={{ transition: 'background 1s' }} className='py-2 px-3 border-[1px] border-[#FFF] rounded-md hover:bg-[#FFF] hover:text-black font-medium'>Learn more</button>

              </div>
            </div> : <div className='flex items-center justify-center relative md:z-10 z-[5] '>
              <h1 className='text-3xl font-bold'>{

                CurrentLocation == 'Login' || CurrentLocation == 'Register' ? '' :

                  /^Home\/([1-6]|1[0-2])$/.test(location.pathname.replace('/', '')) ? 'Event Details' : location.pathname.replace('/', '')


              }</h1>
            </div>
        }
      </header>
      {
        CurrentLocation == 'Login' || CurrentLocation == 'Register' ? "" :
          <div >
            <br />
            <br />
          </div>}
      <main>
        {
          Navigation.state == 'idle' ? <Outlet /> :
            <div className='flex items-center justify-center w-full h-[60vh]'>
              <Oval
                height={80}
                width={80}
                color="black"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#adadad"
                strokeWidth={5}
                strokeWidthSecondary={4}

              />
            </div>
        }

      </main>
      <footer>
        <Footer />
      </footer>



    </>
  )
}

export default App