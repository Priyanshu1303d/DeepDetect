import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Detection from '../Pages/Detection';
import ContactUs from '../Pages/ContactUs';
import FeedBack from '../Pages/FeedBack';

const Routers = () => {
  return <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/detection" element={<Detection />} />
    <Route path="/feedback" element={<FeedBack />} />
    <Route path="/contact" element={<ContactUs />} />
  </Routes>
}

export default Routers