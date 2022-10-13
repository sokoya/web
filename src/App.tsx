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
// import Homepage from "./pages/Homepage";
import Hompeage from "./components/Hompeage";
import SellGiftCards from "./pages/SellGiftCards";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="sell-giftcards" element={<SellGiftCards />} />
        <Route path="airtime-to-cash" element={<AirtimeToCash />} />
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
