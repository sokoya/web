// App.jsx
import './Styles/main.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Individuals from './Pages/Individuals';
import ForBusiness from './Pages/ForBusiness';
import ForDevelopers from './Pages/ForDevelopers';
import Companies from './Pages/Companies';
import Overview from './Pages/Overview';
import APIDocumentation from './Pages/APIDocumentation';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs';
import FAQs from './Pages/FAQs';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-developers" element={<ForDevelopers />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
