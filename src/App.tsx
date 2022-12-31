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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="sell-giftcards" element={<SellGiftCards />} />
        <Route path="airtime-to-cash" element={<AirtimeToCash />} />
        <Route path="why-payscribe" element={<WhyPayscribe />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="bills-payment" element={<BillsPayment />} />
        <Route path="send-receive-money" element={<SRMoney />} />
        <Route path="events" element={<Event />} />
        <Route path="save-earn" element={<SaveEarn />} />
        <Route path="/" element={<Hompeage />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
