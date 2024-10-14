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
import BookADemo from './Pages/BookADemo';
import Paybills from './Pages/Paybills';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Compliance from './Pages/Compliance';
import Payout from './Pages/Payout';
import Issuing from './Pages/Issuing';
import UseCases from './Pages/UseCases';
import CaseStudy from './Pages/CaseStudy';
import Gamepride from './Pages/CaseStudies/Gamepride';
import Connekit from './Pages/CaseStudies/Connkit';

window.scrollTo(0, 0);
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path='/book-a-demo' element={<BookADemo/>} />
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-developers" element={<ForDevelopers />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/api-documentation" element={<APIDocumentation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path='/pay-bills' element={<Paybills/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/compliance' element={<Compliance/>} />
        <Route path='/payout' element={<Payout/>} />
        <Route path='/card-issuing' element={<Issuing/>} />
        <Route path='/use-cases' element={<UseCases/>} />
        <Route path='/case-studies' element={<CaseStudy/>} />
        <Route path='case-studies/gamepride' element={<Gamepride/>} />
        <Route path='case-studies/connekit' element={<Connekit/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
