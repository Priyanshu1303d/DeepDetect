import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes/Routers';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routers />
    </Router>
  );
}

export default App;