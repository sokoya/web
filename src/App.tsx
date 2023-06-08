import "./App.css";
import Layout from "./Globals/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AirtimeToCash from "./pages/AirtimeToCash";
import Hompeage from "./components/Hompeage";
import SellGiftCards from "./pages/SellGiftCards";
import BillsPayment from "./pages/BillsPayment";
import SRMoney from "./pages/SRMoney";
import Event from "./pages/Event";
import SaveEarn from "./pages/SaveEarn";
import WhyPayscribe from "./pages/WhyPayscribe";
import HowItWorks from "./pages/HowItWorks";
import Rewards from "./pages/Rewards";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import './App.css'
import Developers from "./pages/Developers";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Ambassador from "./pages/Ambassadors";
import BecomeAmbassador from "./pages/BecomeAmbassador";
import Business from "./pages/Business";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="sell-giftcards" element={<SellGiftCards />} />
        <Route path="airtime-to-cash" element={<AirtimeToCash />} />
        <Route path="why-payscribe" element={<WhyPayscribe />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="developers" element={<Developers />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="bills-payment" element={<BillsPayment />} />
        <Route path="send-receive-money" element={<SRMoney />} />
        <Route path="events" element={<Event />} />
        <Route path="save-earn" element={<SaveEarn />} />
        <Route path="developers-hub" element={<DevelopersHub />} />
        <Route path="ambassadors" element={<Ambassador />} />   
        <Route path="join-waitlist" element={<BecomeAmbassador />} />
        <Route path="business" element={<Business />} />     
        <Route path="/" element={<Hompeage />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function DevelopersHub(){
    window.location.replace("https://developers.payscribe.ng");
    return null;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
