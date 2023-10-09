import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../ContextHooks/Provider';

function Login() {
  const { Login ,  googleLogin } = useContext(AuthContext);
  const [Show, setShow] = useState(false)
  const [Passworderror, setPasswordError] = useState(null);


  const location = useLocation();
  const Navigate = useNavigate();

  const LoginWithGoogle =() =>{
    googleLogin()
    .then(response =>{
      console.log(response)
      Navigate(location?.state ? location.state : '/')

    })
    .catch(error =>{
      console.log(error)
    })

    console.log('yess click the func ')

  }


  const handleLoginFunc = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

      setPasswordError('Envalid password , try again !')
      setTimeout(() => {
        setPasswordError(null)
      }, 4000);

      return;

    }

    Login(email, password)
      .then(response => {
        console.log(response)
        e.target.reset();
        Navigate(location?.state ? location.state : '/')


      })
      .catch(error => {
        if ('auth/invalid-login-credentials') {
          setPasswordError('Envalid password , try again !')
          setTimeout(() => {
            setPasswordError(null)
          }, 4000);

        }

        else {
          console.log(error)
        }
      })


  }


  return (
    <>
      <div className='min-h-screen'>
        <div className="py-5 lg:w-[30%] md:w-[60%] w-[90%] mx-auto shadow-lg bg-gray-100 rounded-xl">
          <h1 className="text-center font-semibold text-4xl text-gray-600">
            <span>Login Now </span>
          </h1>
          <div >

            <form onSubmit={handleLoginFunc} className="space-y-5 py-5 px-5">

              <input type="email" name="email" placeholder="Enter Your email " required className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]" />
              {Passworderror ? <p className="text-red-500 font-medium">{Passworderror}</p> : ""}

              <input type={Show ? "text" : "password"} name="password" id="user-password" placeholder="Enter your password" className="w-full dark:bg-[#fff] px-2 py-4 text-black outline-none rounded-lg outline-2 focus:outline-gray-300 placeholder:text-base placeholder:text-[#adadad]" />
              <div className="flex flex-row-reverse justify-between">
                <a href="#" className="text-sm text-gray-700 hover:text-black cursor-pointer">Forget password</a>
                <label htmlFor="" className="text-sm text-gray-700 inline-flex gap-1">
                  <input type="checkbox" className="checkbox hover:cursor-pointer" onClick={() => setShow(!Show)}
                  />
                  show password
                </label>
              </div>
              <br />
                <button style={{ transition: 'background 1s' }} className='bg-black w-full hover:bg-white hover:shadow-xl hover:text-black py-2 rounded-md text-white font-medium cursor-pointer uppercase'>Login</button>

            </form>
              <div className="">

                <p className="text-base text-gray-500 text-center">
                  ----------------Or-----------------
                </p>

                <div className='w-full flex items-center justify-center py-3 gap-3 mx-auto LoginIcons '>
                  <div>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div>
                    <button onClick={LoginWithGoogle}> <i className="fa-brands fa-google"></i></button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  You don't have an account ?
                  <Link to="/Register" className="text-[#405aff]">Register</Link>
                </p>
              </div>


          </div>
        </div>

      </div>
      <br />
      <br />




    </>
  )
}

export default Login