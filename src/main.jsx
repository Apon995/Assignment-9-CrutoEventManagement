import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Home from './Components/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Purchase from './Components/Purchase.jsx'
import Profile from './Components/Profile.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Details from './Components/Details.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/Events.json')
      },
      {

        path: '/Home/:id',
        element: <Details />,
        loader: () => fetch('/Events.json')



      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/purchase',
        element: <Purchase />
      },
      {
        path: '/Profile',
        element: <Profile />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Register',
        element: <Register />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
