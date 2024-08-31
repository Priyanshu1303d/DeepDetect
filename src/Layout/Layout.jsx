import React from 'react'
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import Routers from '../routes/Routers'

const Layout = () => {
  return <>
    <Home />
    <main>
      <Routers />
      
    </main>
    <Footer />
  </>
}

export default Layout