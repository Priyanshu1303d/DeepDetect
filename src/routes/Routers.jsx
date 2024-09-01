import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Detection from '../Pages/Detection';
import ContactUs from '../Pages/ContactUs';
import FeedBack from '../Pages/FeedBack';
import Insights from '../Pages/Insights';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detection" element={<Detection />} />
      <Route path="/feedback" element={<FeedBack />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/insights" element={<Insights />} />
    </Routes>
  );
}

export default Routers;
