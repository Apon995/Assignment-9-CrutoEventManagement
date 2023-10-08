import React from 'react';
import { Outlet } from 'react-router-dom'
import "../src/main.css"
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>

      <header>
        <Header />
      </header>
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