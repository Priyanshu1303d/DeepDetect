import React from 'react';
import Footer from '../Components/Footer';
import Routers from '../routes/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = () => {
  return (
    <Router>
      <main>
        <Routers />
      </main>
      <Footer />
    </Router>
  );
}

export default Layout;
